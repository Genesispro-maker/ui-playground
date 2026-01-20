import styles from "./wordle.module.css"

export function Header(){
    return(
        <>
          <header className={styles.header}>
             <h1>Word game</h1>
          </header>
        </>
    )
}