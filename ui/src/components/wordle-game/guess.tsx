import styles from "./wordle.module.css"
import {  range } from "../../utils/game"


export function Guess({ value}: { value: string, answer: string}) {

  return (
    <div>
      <p className={styles.letter}>
        {range(5).map((num) => (
          <span className={styles.cell} key={num}>
            {value ? value[num] : null}
          </span>
        ))}
      </p>
    </div>
  )
}
