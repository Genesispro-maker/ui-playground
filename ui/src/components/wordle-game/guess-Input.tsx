import { useState, type ChangeEvent } from "react"

export function GuessInput({handleGuessInput}){
      const [tentativeGuess, setTentativeGuess] = useState("")

    function handleSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()
         handleGuessInput(tentativeGuess)
         setTentativeGuess('')
    }
    return (
        <>
          <form onSubmit={handleSubmit}>
            <label htmlFor="Guess">Enter Guess : </label>
            <input type="text" required minLength={5} maxLength={5} value={tentativeGuess} onChange={(e) => setTentativeGuess(e.target.value.toUpperCase())}/>
          </form>
        </>
    )
}