export function GameOver({gameStatus, numofguesses, answer}){
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