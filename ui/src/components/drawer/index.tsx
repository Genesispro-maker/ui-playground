import {type ReactNode} from "react";
import styles from './drawer.module.css'
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { Button } from "./button";


export const Drawer = ({handleClose, children} : {handleClose: () => void, children: ReactNode}) => {

    function handleCloseDrawer(){
        handleClose()
    }
   
   return createPortal(
       <div className={`${styles.wrapper}`}>

      <div className={styles.drawer}>

      <div className={styles.random} />
             {children}
          <Button className={styles.closeButton} onClick={() => handleCloseDrawer()}><X /> close</Button>
        </div>
    </div>, document.querySelector("#drawer")!
)
}
