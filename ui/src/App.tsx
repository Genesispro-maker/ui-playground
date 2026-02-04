import { ApplePlayer } from "./components/apple-music-player/apple.music.player";
import { useMorph } from "./utils/morph";
import { Header } from "./components/header/header";
import { Illustration } from "./components/illustration/Illustration";
import { TextData } from "./utils/data"
import { Drawer } from "./components/drawer";
import { useEffect, useState } from "react";
import { useToggle } from "./hooks/use-toogle";
import { Minus, Plus } from "lucide-react";


function App(){
   const [isOpen, handleIsOpen] = useToggle(false)
   const [AmountCount, setAmountCount] = useState<number>(0)
   const morph = useMorph(TextData)

   
 useEffect(() => {
       const Escape = (e: KeyboardEvent) => {
         if(e.code === "Escape"){
            handleIsOpen()
         }
       }

       window.addEventListener("keydown", Escape)

       return () => {
         window.addEventListener("keydown", Escape)
       }
    }, [isOpen, handleIsOpen])



    const Increment = () => {
      setAmountCount((count) => count + 1)
    }

    const Decrement = () => {
      setAmountCount((count) => count - 1)
    }
    

    
    const formattedPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(AmountCount)




   return (
    <>
     <Header />
     <div className="herotext">
        <h3>welcome to my <span style={{color: TextData[morph].color}}>{TextData[morph].text}</span> where i put my UI engineering skills to work</h3>
     </div>
     <Illustration />
     <ApplePlayer />
     <button className="drawerButton" onClick={handleIsOpen}>{isOpen ? "close drawer" : "open drawer"}</button>
    
     {isOpen && (

     <Drawer handleClose={handleIsOpen}>

      <h1 className="heading">{formattedPrice}</h1>

      <div className="buttonWrapper">

          <button className="btns" onClick={Increment}><Plus /></button>

          <button className="btns" onClick={Decrement}><Minus /></button>

          </div>
          
      </Drawer>)}
    </>
   )
}

export default App;
