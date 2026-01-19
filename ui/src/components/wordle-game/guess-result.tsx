import { Guess } from "./guess"
import { range, NUM_OF_GUESSES } from "../../utils/game"

export function GuessResult({ guesses }: { guesses: string[] }) {
  return (
    <div>
      {range(NUM_OF_GUESSES).map((num) => (
        <Guess key={num} value={guesses[num]} />
      ))}
    </div>
  )
}
