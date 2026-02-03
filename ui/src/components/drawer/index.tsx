import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";
import styles from './drawer.module.css'

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
      <div className=>
         <div />
            <h1>{formattedPrice}</h1>

            <div>
                <button onClick={Increment}><Plus /></button>
                <button onClick={Decrement}><Minus /></button>
            </div>
      </div>,
       document.querySelector("#drawer-root")!
)
}