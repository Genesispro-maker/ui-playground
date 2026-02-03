import { Pause, Play } from "lucide-react"
import { useRef, useState } from "react"
import styles from "./audio-visualizer.module.css"


export function AudioVisualizer(){
  
const [playing, setPlaying] = useState<boolean>(false)
const canvasRef = useRef<HTMLCanvasElement | null>(null)
const audioRef = useRef<HTMLAudioElement | null>(null)
const audioCtxRef = useRef<AudioContext | null>(null)
const analyserRef = useRef<AnalyserNode | null>(null)
const sourceRef = useRef<MediaElementAudioSourceNode | null>(null)
const animationRef = useRef<number | null>(null)
 

function handleClick() {
  if (!canvasRef.current) return

  canvasRef.current.width = 600
  canvasRef.current.height = 500

  if (!audioRef.current) {
    audioRef.current = new Audio()
    audioRef.current.src = "/plenty.mp3"
  }

  if (!audioCtxRef.current) {
    audioCtxRef.current = new AudioContext()
  } 

  const audioCtx = audioCtxRef.current
  audioCtx.resume()

  if (!analyserRef.current) {
    analyserRef.current = audioCtx.createAnalyser()
    analyserRef.current.fftSize = 128
  }

  if (!sourceRef.current) {
    sourceRef.current = audioCtx.createMediaElementSource(audioRef.current)
    sourceRef.current.connect(analyserRef.current)
    analyserRef.current.connect(audioCtx.destination)
  }

    if(playing){
        audioRef.current.pause()
    }
    else{
        audioRef.current.play()
    }

    setPlaying(!playing)
  animate()

  
}

function animate() {
  if (!canvasRef.current || !analyserRef.current) return

  const ctx = canvasRef.current.getContext("2d")
  if (!ctx) return

  const analyser = analyserRef.current
  const bufferLength = analyser.frequencyBinCount
  const dataArray = new Uint8Array(bufferLength)
  const barWidth = canvasRef.current.width / bufferLength

  ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

  analyser.getByteFrequencyData(dataArray)

  let x = 0
  for (let i = 0; i < bufferLength; i++) {
    const barHeight = dataArray[i]
    ctx.fillStyle = "black"
    ctx.fillRect(
      x,
      canvasRef.current.height - barHeight,
      barWidth,
      barHeight
    )
    x += barWidth
  }

  animationRef.current = requestAnimationFrame(animate)
}

    return (
        <>
      <main className={styles.wrapper}>
        <p className={styles.text}>It's plenty</p>
         <canvas ref={canvasRef} className={styles.canvas}></canvas>
         <button onClick={handleClick} className={styles.btn}>{playing ? <Pause /> : <Play />}</button>
      </main>
      </>
    )
}