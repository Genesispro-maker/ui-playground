import { useState } from "react"

export function Illustration(){
    const [horizontalPosition, setHorizontalPosition] = useState<number>(0)
    const [verticalPosition, setVerticalPosition] = useState<number>(0)

    return(
        <>
          <div></div>

          <div>
            <input type="range" min={-100} max={100} value={horizontalPosition} onChange={(e) => setHorizontalPosition(Number(e.target.value))}/>
            <input type="range" min={-100} max={100} value={verticalPosition} onChange={(e) => setVerticalPosition(Number(e.target.value))}/>
          </div>
        </>
    )
}