export function GameOver({gameStatus, numofguesses, answer}: {gameStatus: string, numofguesses: number, answer: string}){
   if(gameStatus === "won"){
    return (
        <div>
            <p>
                <strong>congrat</strong> got it in <strong>{numofguesses}</strong>
            </p>
        </div>
    )
   }
   else if(gameStatus === "lost"){
    return (
        <>
          <div>
            <p>lost the answer is {answer}</p>
          </div>
        </>
    )
   }
}