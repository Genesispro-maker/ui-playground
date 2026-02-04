import { ApplePlayer } from "./components/apple-music-player/apple.music.player";
import { useMorph } from "./utils/morph";
import { Header } from "./components/header/header";
import { Illustration } from "./components/illustration/Illustration";
import { TextData } from "./utils/data"
import { Drawer } from "./components/drawer";
import { useCallback, useState, useEffect } from "react";


function useToggle(initialValue = false){
    const [toggle, setToggle] = useState<boolean>(initialValue)


    const handleToggleOpen = useCallback(() => {
        setToggle((currentToggle) => !currentToggle)
    },  [])

    return [toggle, handleToggleOpen]
}


function App(){
   const [isOpen, handleIsOpen] = useToggle(false)
   const morph = useMorph(TextData)

   
 useEffect(() => {
       function Escape(e: KeyboardEvent){
         if(e.code === "Escape"){
            handleIsOpen()
         }
       }

       window.addEventListener("keydown", Escape)

       return () => {
         window.addEventListener("keydown", Escape)
       }
    }, [isOpen, handleIsOpen])

   return (
    <>
     <Header />
     <div className="herotext">
        <h3>welcome to my <span style={{color: TextData[morph].color}}>{TextData[morph].text}</span> where i put my UI engineering skills to work</h3>
     </div>
     <Illustration />
     <ApplePlayer />
     <button className="drawerButton" onClick={handleIsOpen}>{isOpen ? "close drawer" : "open drawer"}</button>
     {isOpen && <Drawer handleClose={handleIsOpen} initialValue={0}/>}
    </>
   )
}

export default App;
