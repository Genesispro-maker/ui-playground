import { type PassportType } from "./types";
import styles from "./passport.module.css"
import {useState } from "react";


const PassportColors: PassportType = [
  "#FF0000",
  "#0000FF", 
  "#008000", 
  "#000000",
  "#8603ddff",
  "#f700c1"
]

export function WebPassport(){
    const [passportColor, setPassportColor] = useState<string>(PassportColors[0])
    return (
        <>
        <div className={styles.wrapper} aria-label="passport">
            <div style={{position: "relative", width: "200px"}} className={styles.colorWrapper}>
            {PassportColors.map((colors, index) => (
                      <div className={styles.colors} aria-label={`${colors}`} key={index} style={{backgroundColor: colors}} onClick={() => setPassportColor(colors)}></div>
                )
            )}
            </div>

            <main>
                <div className={styles.cardWrapper} style={{backgroundColor: passportColor}}>
                    <div>
                        <p className={styles.title}>Motion <br /> Web Passport</p>

                        <h3 className={styles.name}>Genesis Pro</h3>
                    </div>
                </div>
            </main>
            </div>
        </>
    )
}