import { useState } from "react"
import styles from "../styles/illustration.module.css"

export function Illustration(){
    const [horizontalPosition, setHorizontalPosition] = useState<number>(0)
    const [verticalPosition, setVerticalPosition] = useState<number>(0)

    const translateX = horizontalPosition
    const translateY = verticalPosition

    return(
        <>
        <div className={styles.boxWrapper}>
          <div className={styles.boxWrap}>
          <div className={styles.box} style={{translate: `${translateX}px ${translateY}px`}}></div>
          </div>

              <div className={styles.valuesWrapper}>
                <code>transform: translate({translateX}px, {translateY}px)</code>
              </div>
          <div className={styles.Rangewrapper}>
            <p>X: {translateX}</p>
            <input type="range" className={styles.verticalRange} min={-100} max={100} value={horizontalPosition} onChange={(e) => setHorizontalPosition(Number(e.target.value))}/>
             
            <input type="range" min={-100} max={100} value={verticalPosition} onChange={(e) => setVerticalPosition(Number(e.target.value))}/>
            <p>Y: {translateY}</p>
          </div>
          </div>
        </>
    )
}