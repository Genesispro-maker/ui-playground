import styles from "./wordle.module.css"

export function GameOver({gameStatus, numofguesses, answer}: {gameStatus: string | number, numofguesses: number, answer: string}){
  const bgColor = gameStatus === "won" ? 'var(--color-success)' : 'var(--color-error)'
   if(gameStatus === "won"){
    return (
        <div style={{backgroundColor: bgColor}} className={styles.gameStatus}>
            <p>
                <strong>congrat</strong> got it in <strong>{numofguesses}</strong>
            </p>
        </div>
    )
   }
   else if(gameStatus === "lost"){
    return (
        <>
          <div style={{backgroundColor: bgColor}} className={styles.gameStatus}>
            <p>lost the answer is {answer}</p>
          </div>
        </>
    )
   }
}