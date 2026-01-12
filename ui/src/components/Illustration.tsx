import { useState } from "react"
import styles from "../styles/illustration.module.css"

export function Illustration(){
     const [position, setPosition] = useState({
        x: 0,
        y: 0,
     })
    return(
        <>
        <main className={styles.boxWrapper}>
          <div className={styles.boxWrap}>
          <div className={styles.box} style={{translate: `${position.x}px ${position.y}px`}}></div>
          </div>

              <div className={styles.valuesWrapper}>
                <code>transform: translate({position.x}px, {position.y}px)</code>
              </div>
          <div className={styles.Rangewrapper}>
            <p className={styles.Text}>X : {position.x}</p>
            <input type="range" className={styles.verticalRange} min={-100} max={100} value={position.x} onChange={(e) => setPosition({...position, x: Number(e.target.value)})}/>
             
            <input type="range" min={-100} max={100} value={position.y} onChange={(e) => setPosition({...position, y: Number(e.target.value)})}/>
            <p className={styles.Text}>Y: {position.y}</p>

          </div>
          </main>
        </>
    )
}