import { Github } from "lucide-react"
import { Fragment } from "react/jsx-runtime"
import styles from "../styles/header.module.css"

export const Header = () => {
  return (
    <Fragment>
         <header className={styles.header}>
            <h2 style={{color: "white"}}>UI PLAY</h2>

              <a href="https://github.com/Genesispro-maker/" className={styles.link}>
                 <Github size={25} fill="none" className={styles.github}/>
              </a> 
         </header>
    </Fragment>
  )
}
