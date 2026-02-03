import { useState } from "react"
import styles from "./illustration.module.css"

export function Illustration(){
     const [position, setPosition] = useState({x: 0, y: 0})

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

            <input type="range" role="slider" aria-label="Horizontal Position" className={styles.input} min={-100} max={100} value={position.x} onChange={(e) => {
              const newPosition =  {...position, x: Number(e.target.value)}
              setPosition(newPosition)
            }}/>
             
            <input className={styles.input} aria-label="Vertical Position" role="slider" type="range" min={-100} max={100} value={position.y} onChange={(e) => {
              const newPosition = {...position, y: Number(e.target.value)}
              setPosition(newPosition)
            }}/>

            <p className={styles.value} role="text">Y : {position.y}</p>

          </div>
          </main>
        </>
    )
}