import { Minus, Plus } from "lucide-react";
import { useCallback, useState } from "react";
import { createPortal } from "react-dom";

function useToggle(){
    const [toggle, setToggle] = useState(false)


    const handleToggleOpen = useCallback(() => {
        setToggle((currentToggle) => !currentToggle)
    },  [])

    return [toggle, handleToggleOpen]
}


export const Drawer = ({initialValue} : {initialValue: number}) => {
   const [Amount, setAmount] = useState(initialValue)

    const formattedPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(Amount)


    const Increment = () => {
        setAmount((amount) => amount + 1)
    }

    const Decrement = () => {
        setAmount((amount) => amount - 1)
    }

   return createPortal(
      <div>
         <div>
            <h1>{formattedPrice}</h1>

            <div>
                <button onClick={Increment}><Plus /></button>
                <button onClick={Decrement}><Minus /></button>
            </div>
         </div>
      </div>,
       document.querySelector("#drawer-root")!
)
}