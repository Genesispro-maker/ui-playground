import styles from "./wordle.module.css"
import { checkGuess, range } from "../../utils/game"


export function Guess({ value, answer,}: { value?: string, answer: string}) {

  const result = checkGuess(value, answer)

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
