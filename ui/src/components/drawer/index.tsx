import { Minus, Plus } from "lucide-react";
import { useRef, useState} from "react";
import styles from './drawer.module.css'
import { createPortal } from "react-dom";
import { X } from "lucide-react";


export const Drawer = ({initialValue, handleClose} : {initialValue: number, handleClose: () => void}) => {
   const [Amount, setAmount] = useState<number>(initialValue)

   const wrapperRef = useRef<HTMLDivElement | null>(null)

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


    function handleCloseDrawer(){
        setIsClosing(true)
        handleClose()
    }
   
   return createPortal(
       <div ref={wrapperRef} className={`${styles.wrapper}`}>

      <div className={styles.drawer}>

      <div className={styles.random} />

      <h1 className={styles.heading}>{formattedPrice}</h1>

      <div className={`${styles.buttonWrapper}`}>

          <button className={styles.btns} onClick={Increment}><Plus /></button>

          <button className={styles.btns} onClick={Decrement}><Minus /></button>

          </div>

          <button className={styles.closeButton} onClick={() => handleCloseDrawer()}><X />close</button>

        </div>
    </div>, document.querySelector("#drawer")!
)
}