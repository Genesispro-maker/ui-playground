import styles from "./wordle.module.css"
import { range } from "../../utils/game"

export function Guess({value}: {value: string}){
    return (
        <>
          <div>
            <p className={styles.letter}>{range(5).map((num) => {
               return <span className={styles.cell} key={num}>{value[num]}</span>
            })}</p>
          </div>
        </>
    )
}