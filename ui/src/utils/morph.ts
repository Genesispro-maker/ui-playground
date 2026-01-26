import { useEffect, useState } from "react"

export const useMorph = (TextData: Array<string>) => {
     const [index, setIndex] = useState(0)
    useEffect(() => {
        const textMorphInterval = window.setInterval(() => {
            setIndex((currentIndex) => (currentIndex + 1) % TextData.length)
        }, 1000)

        return () => {
            window.clearInterval(textMorphInterval)
        }
    }, [index, TextData])

    return index
}