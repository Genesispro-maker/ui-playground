import { type PassportType } from "../types/passport";
import styles from "../styles/passport.module.css"

const PassportColors: PassportType = [
    "#FF0000",
    "#0000FF",
    "#FFFF00",
    "#0000",
    "#FFFF",
]

export function WebPassport(){
    return (
        <>
        <div className={styles.wrapper}>
            {PassportColors.map((colors, index) => {
                return (
                    <div>
                      <input type="radio" key={index} style={{accentColor: colors}}/>
                    </div>
                )
            })}


            <main>
                <div className={styles.cardWrapper}>
                    <div>
                        <p>Motion web passport</p>
                    </div>
                </div>
            </main>
            </div>
        </>
    )
}