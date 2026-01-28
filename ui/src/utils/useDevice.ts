import { useEffect, useState } from "react";

export function useDevice(): MediaDeviceInfo[]{
    const [device, setDevices] = useState<MediaDeviceInfo[]>([])
   useEffect(() => {
     (async () => {
      await navigator.mediaDevices.getUserMedia({audio: true})
      const list = await navigator.mediaDevices.enumerateDevices()
      setDevices(list)
     })()
   }, [])
   return device
}