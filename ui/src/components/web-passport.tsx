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
            {PassportColors.map((colors, index) => {
                return (
                    <div className={styles.wrapper}>
                       <div className={styles.colorCheck} key={index} style={{backgroundColor: colors}}></div>
                    </div>
                )
            })}
        </>
    )
}