import { useState } from "react";
import { SAMPLE, WORDS } from "../../utils/game";
import { GuessInput } from "./guess-Input";
import { GuessResult } from "./guess-result";
import { Header } from "./header";

const answer = SAMPLE(WORDS)
console.log({answer})

export function WORDLE(){
    const [guesses, setGuesses] = useState([])

       function HandleGuess(guess){
          const nextGuess = {
            value: guess,
            id: `${guess}-${Math.random()}`,
          }

          setGuesses([...guesses, nextGuess])
       }
    return (
        <>
          <Header />
          <GuessResult guesses={guesses}/>
          <GuessInput handleGuessInput={HandleGuess}/>
        </>
    )
}