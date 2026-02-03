import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import styles from './drawer.module.css'
import { createPortal } from "react-dom";
import { X } from "lucide-react";


export const Drawer = ({initialValue, handleClose} : {initialValue: number}) => {
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
       <div className={styles.wrapper}>

      <div className={styles.drawer}>

      <div className={styles.random} />

      <h1 className={styles.heading}>{formattedPrice}</h1>

      <div className={`${styles.buttonWrapper}`}>

          <button className={styles.btns} onClick={Increment}><Plus /></button>

          <button className={styles.btns} onClick={Decrement}><Minus /></button>

          </div>

          <button onClick={handleClose}>close</button>

        </div>
    </div>, document.querySelector("#drawer")!
)
}