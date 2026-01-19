import styles from "./wordle.module.css"

export function Guess({value}: {value: string}){
    return (
        <>
          <div>
            <p className={styles.letter}>{value.split('').map(letter => {
                return <span className={styles.cell}>{letter}</span>
            })}</p>
          </div>
        </>
    )
}