import { type PassportType } from "../types/passport";


const PassportColors: PassportType = [
    "#FF0000",
    "#0000FF",
    "#FFFF00",
    "#0000",
    "#FFFF",
]

export function WebPassport(){
    return (
        <>
          <div>
            {PassportColors.map((colors, index) => {
                return <div key={index} style={{backgroundColor: colors}}></div>
            })}
          </div>
        </>
    )
}