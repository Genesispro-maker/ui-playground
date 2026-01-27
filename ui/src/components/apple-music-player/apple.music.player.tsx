import { FastForward, Pause, Play, Rewind } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import styles from './audio-visualizer.module.css'
import { useFormat } from "../../utils/format"
export const ApplePlayer = () => {
    const [playing, setPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState<number>(0)
    const [duration, setDuration] = useState<number>(0)
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const SourceRef = useRef<MediaElementAudioSourceNode | null>(null)
    const Audiocontext = useRef<AudioContext | null>(null)


    useEffect(() => {
        if(!audioRef.current){
            return
        }

        const audioTimeUpdate = () =>  {
            setCurrentTime(audioRef.current!.currentTime)
        }

        audioRef.current.addEventListener("timeupdate", audioTimeUpdate)

        return () => {
            audioRef.current?.removeEventListener("timeupdate", audioTimeUpdate)
        }
    }, [])
    

   async function play(){
       if (!audioRef.current) {
         audioRef.current = new Audio()
           audioRef.current.src = "/audio/plenty.mp3"

        

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
           setDuration(audioRef.current!.duration)
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
                <div></div>
            </div>
            <div className={styles.timers}>
                <p>{useFormat(currentTime)}</p>
                <p>{useFormat(duration)}</p>
            </div>

            <div>
                <button className={styles.fastforward}><Rewind /></button>
                <button>{playing ? <Pause /> : <Play />}</button>
                <button><FastForward /></button>
            </div>
            </div>
        </main>
          {/* <button style={{backgroundColor: "white"}} onClick={play}>{playing ? <Pause /> : <Play />}</button> */}
        </>
    )
}