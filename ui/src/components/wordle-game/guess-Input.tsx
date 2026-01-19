import { type ChangeEvent, type SetStateAction } from "react"

export function GuessInput({guess, setGuess}: {guess: string, setGuess: React.Dispatch<SetStateAction<string>>}){

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