import { FastForward, Pause, Play, Rewind, Speaker } from "lucide-react"
import { useRef, useState } from "react"
import styles from './audio-visualizer.module.css'
import { formatTime } from "../../utils/format"
import { useDevice } from "../../utils/useDevice"



export const ApplePlayer = () => {
    const [playing, setPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState<number>(0)
    const [rewind, setRewind] = useState(false)
    const [duration, setDuration] = useState<number>(0)
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const SourceRef = useRef<MediaElementAudioSourceNode | null>(null)
    const Audiocontext = useRef<AudioContext | null>(null)  

    
    const device = useDevice()
    console.log(device)

   async function play(){
       if (!audioRef.current) {
         audioRef.current = new Audio()
           audioRef.current.src = "/audio/plenty.mp3"

    audioRef.current.addEventListener("loadedmetadata", () => {
      console.log("Duration loaded:", audioRef.current!.duration);
      setDuration(audioRef.current!.duration);
    });

     audioRef.current.addEventListener("timeupdate", () => {
        setCurrentTime(audioRef.current!.currentTime);
      });

        

           if(!Audiocontext.current){
               Audiocontext.current = new AudioContext()
           }

           const audioCtx = Audiocontext.current
           await audioCtx?.resume()

           if(!SourceRef.current){
              SourceRef.current = audioCtx.createMediaElementSource(audioRef.current)
              SourceRef.current.connect(audioCtx?.destination)
           }
  }

           if(playing){
            await audioRef.current.pause()
           }
           else{
            await audioRef.current.play()
           }
           setPlaying(!playing)


           audioRef.current.addEventListener("ended", function() {
              setPlaying(false)
           })
    }
    return (
        <>
        <main className={styles.wrapper}>
            <div>
                <figure className={styles.cover}>
                    <picture>
                        <img src="/audio/1841bdc698.avif" className={styles.image} alt="Burna Boy it's plenty music Cover Image"/>
                    </picture>
                </figure>

            <h4 className={styles.title}>It's Plenty</h4>
            <p className={styles.name}>Burna Boy</p>

            <div className={styles.parent}>
                <div className={styles.child} style={{width: duration ? `${(currentTime / duration) * 100}%` : "0%",}}></div>
            </div>
            <div className={styles.timers}>
                <p>{formatTime(currentTime)}</p>
                <p>- {formatTime(duration - currentTime)}</p>
            </div>

            <div className={styles.controls}>

                <button onClick={() => {
                  if(!audioRef.current) return

                  audioRef.current.currentTime -= 10
                  setCurrentTime(audioRef.current.currentTime)
                  setRewind(!rewind)
                }} className={styles.rewindbutton}><Rewind className={styles.rewind}/></button>

              <button style={{position: "relative"}} className={styles.playbutton} onClick={play}>
               
               <div style={{
                   position: "absolute",
                   opacity: playing ? 1 : 0,
                   transform: playing ? "scale(1)" : "scale(0.25)",
                   filter: playing ? "blur(0px)" : "blur(10px)",
                   transition: "all 0.3s ease-in-out",
             }}>
                <Pause className={styles.pause} />

               </div>

              <div style={{
                   position: "absolute",
                   opacity: playing ? 0 : 1,
                   transform: playing ? "scale(0.25)" : "scale(1)",
                   filter: playing ? "blur(10px)" : "blur(0px)",
                   transition: "all 0.3s ease-in-out",
              }}>
                 <Play className={styles.play} />

              </div>

             </button>

                <button onClick={() => {
                    if (!audioRef.current) return

                  audioRef.current.currentTime += 10
                  setCurrentTime(audioRef.current.currentTime)

                  Audiocontext.current?.resume()
                }} className={styles.fastforwardbutton}><FastForward className={styles.fastforward}/></button>

            </div>

            <div>
                <Speaker className={styles.speaker}/>
                 {device.length > 0 && <p>{device[1].label}</p>}
            </div>
            </div>
        </main>
        </>
    )
}