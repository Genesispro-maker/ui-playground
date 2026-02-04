import { useState } from "react"
import styles from "./illustration.module.css"
import { Slider } from "./slider"

export function Illustration(){
     const [position, setPosition] = useState<{x: number, y: number}>({x: 0, y: 0})

    return(
        <>
        <main className={styles.wrapper}>

          <div className={styles.BoxWrap}>

          <div className={styles.box} style={{translate: `${position.x}px ${position.y}px`}}></div>

          </div>

              <div className={styles.valuesWrapper}>

                <code>transform: translate({position.x}px, {position.y}px)</code>

              </div>

          <div className={styles.Rangewrapper}>

            <p className={styles.value} role="text">X : {position.x}</p>

             <Slider role="slider" type="range" className={styles.input} aria-label="Horizontal Position" min={-100} max={100} value={position.x} onChange={(e) => setPosition({...position, x: Number(e.target.value)})}/>



            <Slider role="slider" type="range" className={styles.input} aria-label="Vertical Position" min={-100} max={100} value={position.y} onChange={(e) => setPosition({...position, y: Number(e.target.value)})}/>
             


            <p className={styles.value} role="text">Y : {position.y}</p>

          </div>
          </main>
        </>
    )
}