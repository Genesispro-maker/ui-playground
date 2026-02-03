<<<<<<< HEAD
import { AudioVisualizer } from "./components/audio-visualizer";
import { Drawer } from "./components/drawer";
import { Header } from "./components/header";
import { Illustration } from "./components/Illustration";
import { useState, useCallback } from "react";



function useToggle(initialValue = false){
    const [toggle, setToggle] = useState(initialValue)


    const handleToggleOpen = useCallback(() => {
        setToggle((currentToggle) => !currentToggle)
    },  [])

    return [toggle, handleToggleOpen]
}

function App(){
   const [isOpen, handleIsOpen] = useToggle(false)
=======
import { ApplePlayer } from "./components/apple-music-player/apple.music.player";
import { useMorph } from "./utils/morph";
import { Header } from "./components/header/header";
import { Illustration } from "./components/illustration/Illustration";
import { TextData } from "./utils/data";


function App(){
   const morph = useMorph(TextData)
   
>>>>>>> main
   return (
    <>
     <Header />
     <div className="herotext">
        <h3>welcome to my <span style={{color: TextData[morph].color, transform: "scale(1)", transition: "transform 0.5s ease-in-out"}}>{TextData[morph].text}</span> where i put my UI engineering skills to work</h3>
     </div>
     <Illustration />
<<<<<<< HEAD
     <AudioVisualizer />
     <button onClick={handleIsOpen}>{isOpen ? "close drawer" : "open drawer"}</button>
     {isOpen && <Drawer initialValue={0}/>}
=======
     <ApplePlayer />
>>>>>>> main
    </>
   )
}

export default App;
