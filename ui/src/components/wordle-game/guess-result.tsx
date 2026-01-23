import { Guess } from "./guess"
import { range, NUM_OF_GUESSES } from "../../utils/game"
import styles from "./wordle.module.css"
export function GuessResult({ guesses, answer }: { guesses: string[], answer: string }) {
  return (
    <div className={styles.game}>
      {range(NUM_OF_GUESSES).map((num) => {
        console.log(num)
       return <Guess key={num} value={guesses[num]} answer={answer}/>
})}
    </div>
  )
}
