import { useState, useCallback } from "react"

export function useToggle(initialValue = false){
    const [toggle, setToggle] = useState<boolean>(initialValue)


    const handleToggleOpen : () => void = useCallback(() => {
        setToggle((currentToggle) => !currentToggle)
    },  [])

    return [toggle, handleToggleOpen] as const;
}