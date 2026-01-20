import { useState } from "react";
import { NUM_OF_GUESSES, SAMPLE, WORDS } from "../../utils/game";
import { GuessInput } from "./guess-Input";
import { GuessResult } from "./guess-result";
import { Header } from "./header";
import { GameOver } from "./gameOver";
import styles from "../wordle-game/wordle.module.css"

const answer = SAMPLE(WORDS)
console.log({answer})

export function WORDLE(){
    const [gameStatus, setGameStatus] = useState<string>("running")
    const [guesses, setGuesses] = useState<string[]>([])

       function HandleGuess(guess: string){
        const nextGuesses = [...guesses, guess]
        setGuesses(nextGuesses)

            if(guess.toUpperCase() === answer){
                setGameStatus("won")
            }
            else if(nextGuesses.length >= NUM_OF_GUESSES){
                setGameStatus("lost")
            }

        }
    return (
        <>
        <div className={styles.main}>
          <Header />
        <div className={styles.gameWrapper}>
          <p>{gameStatus}</p>        
          <GuessResult guesses={guesses} answer={answer}/>
          <GuessInput handleGuessInput={HandleGuess} gameStatus={gameStatus}/>
          {gameStatus !== "running" && <GameOver gameStatus={gameStatus} numofguesses={guesses.length} answer={answer}/>}
          </div>
          </div>
        </>
    )
}