import { useEffect, useState } from "react"
import { type TextDataType } from "./data"


export const useMorph = (TextData: Array<TextDataType>) => {
     const [index, setIndex] = useState(0)
    useEffect(() => {
        const textMorphInterval = window.setInterval(() => {
            setIndex((currentIndex) => (currentIndex + 1) % TextData.length)
        }, 1000)

        return () => {
            window.clearInterval(textMorphInterval)
        }
    }, [TextData])

    return index
}