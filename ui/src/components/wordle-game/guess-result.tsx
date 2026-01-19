import { Guess } from "./guess"
import { range, NUM_OF_GUESSES } from "../../utils/game"

export function GuessResult({guesses}){
    return(
        <>
          <div>
            {range(NUM_OF_GUESSES).map((num) => {
                return <Guess key={num} value={guesses[num]}/>
            })}
          </div>
        </>
    )
}