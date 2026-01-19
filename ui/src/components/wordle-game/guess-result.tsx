export function GuessResult({guesses}){
    return(
        <>
          <div>
            {guesses.map((guess: string, index: number) => {
                return <p key={index}>{guess}</p>
            })}
          </div>
        </>
    )
}