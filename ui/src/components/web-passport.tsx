import { type PassportType } from "../types/passport";
import styles from "../styles/passport.module.css"
import { useId, useState } from "react";


const PassportColors: PassportType = [
  "#FF0000",
  "#0000FF", 
  "#008000", 
  "#000000",
]

export function WebPassport(){
    const [passportColor, setPassportColor] = useState<string>(PassportColors[0])
    const [name, setName] = useState<string>("Genesis Pro")
    const id = useId()
    return (
        <>

        <input type="text" value={name} id={id} name={id} onChange={(e) => setName(e.target.value)}/>
        <div className={styles.wrapper}>
            {PassportColors.map((colors, index) => (
                    <input className={styles.colors} value={colors} type="radio" key={index} style={{accentColor: colors}} checked={colors === passportColor} onChange={(e) => setPassportColor(e.target.value)}/>
                )
            )}

            <main>
                <div className={styles.cardWrapper} style={{backgroundColor: passportColor}}>
                    <div>
                        <p className={styles.title}>Motion <br /> Web Passport</p>

                        <h3 className={styles.name}>{name}</h3>
                    </div>
                </div>
            </main>
            </div>
        </>
    )
}