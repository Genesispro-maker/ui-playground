import { useState, type ChangeEvent } from "react"
import styles from "./wordle.module.css"
export function GuessInput({handleGuessInput, gameStatus}: {handleGuessInput: any, gameStatus: string}){
      const [tentativeGuess, setTentativeGuess] = useState("")

    function handleSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()

         handleGuessInput(tentativeGuess)

         setTentativeGuess('')
    }
    return (
        <>
          <form onSubmit={handleSubmit}>
            <div className={styles.formWrapper}>
            <label className={styles.label} htmlFor="Guess">Enter Guess : </label>
            <input className={styles.gameInput} disabled={gameStatus !== "running"} type="text" required minLength={5} maxLength={5} value={tentativeGuess} onChange={(e) => setTentativeGuess(e.target.value.toUpperCase())}/>
            </div>
          </form>
        </>
    )
}