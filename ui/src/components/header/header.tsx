import { Github, Moon, Sun } from "lucide-react"
import { Fragment } from "react/jsx-runtime"
import styles from "./header.module.css"
import { useState } from "react"




export const Header = () => {
  const [theme, setThemeState] = useState("dark")
  
function setTheme(theme: "light" | "dark"){
  document.body.setAttribute("data-theme", theme)

  setThemeState(theme)


  localStorage.setItem("theme", theme)
}



function toggleTheme(){
   const newTheme = theme === "light" ? "dark" : "light"
   setTheme(newTheme)
}

  return (
    <Fragment>
         <header className={styles.header}>
            <h2 className={styles.heading}>UI PLAY</h2>
            <div className={styles.themeButtonWrapper}>
              <a href="https://github.com/Genesispro-maker/" className={styles.link} role="link" aria-label="link">
                 <Github size={25} fill="none" className={styles.github}/>
              </a> 
                <button className={styles.themeButton} onClick={toggleTheme}>{theme === "light" ? <Moon className={styles.themeIcon}/> : <Sun className={styles.themeIcon}/>}</button>
              </div>
         </header>
    </Fragment>
  )
}
