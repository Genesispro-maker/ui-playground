import { useState, type ChangeEvent } from "react"

export function GuessInput(){
    const [guess, setGuess] = useState("")

    function handleSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()
        console.log(guess)
        setGuess('')
    }
    return (
        <>
          <form onSubmit={handleSubmit}>
            <label htmlFor="Guess">Enter Guess : </label>
            <input type="text" required minLength={5} maxLength={5} value={guess} onChange={(e) => setGuess(e.target.value.toUpperCase())}/>
          </form>
        </>
    )
}