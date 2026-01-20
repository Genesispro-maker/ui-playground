import styles from "./wordle.module.css"

export function GameOver({gameStatus, numofguesses, answer}: {gameStatus: string, numofguesses: number, answer: string}){
  
   if(gameStatus === "won"){
    return (
        <div className={styles.gameStatus}>
            <p>
                <strong>congrat</strong> got it in <strong>{numofguesses}</strong>
            </p>
        </div>
    )
   }
   else if(gameStatus === "lost"){
    return (
        <>
          <div className={styles.gameStatus}>
            <p>lost the answer is {answer}</p>
          </div>
        </>
    )
   }
}