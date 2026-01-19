import { Guess } from "./guess"
import { type GuessesType } from "./types"

export function GuessResult({guesses}: GuessesType[]){
    return(
        <>
          <div>
            {guesses.map(({value, id}: {value: string, id: string}) => {
                return <Guess value={value} key={id}/>
            })}
          </div>
        </>
    )
}