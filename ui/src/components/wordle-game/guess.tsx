import styles from "./wordle.module.css"
import { range } from "../../utils/game"

export function Guess({value}: {value: string}){
    return (
        <>
          <div>
            <p className={styles.letter}>{range(5).map((num) => {
                return <span key={num} className={styles.cell}>{value[num]}</span>
            })}</p>
          </div>
        </>
    )
}