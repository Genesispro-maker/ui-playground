import { Github, Moon, Sun } from "lucide-react"
import { Fragment } from "react/jsx-runtime"
import styles from "./header.module.css"
import { useEffect, useState } from "react"




export const Header = () => {
  const [theme, setTheme] = useState("dark")
  
function setThemeState(theme: "light" | "dark"){
  document.body.setAttribute("data-theme", theme)

  setTheme(theme)


  localStorage.setItem("theme", theme)
}



function toggleTheme(){
   const newTheme = theme === "light" ? "dark" : "light"
   setThemeState(newTheme)
}   

    useEffect(() => {
      (() => {
        const savedTheme = localStorage.getItem("theme")
        if(savedTheme === "light" || savedTheme === "dark"){
          setThemeState(savedTheme)
        }
        else{
          setThemeState("dark")
        }
      })()
    }, [])

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
