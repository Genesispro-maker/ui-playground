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
   return (
    <>
     <Header />
     <Illustration />
     <AudioVisualizer />
     <button onClick={handleIsOpen}>{isOpen ? "close drawer" : "open drawer"}</button>
     {isOpen && <Drawer initialValue={0}/>}
    </>
   )
}

export default App;
