import { useEffect, useState } from "react";

export function useDevice(): MediaDeviceInfo[]{
    const [device, setDevices] = useState<MediaDeviceInfo[]>([])
   useEffect(() => {
      navigator.mediaDevices.enumerateDevices().then((devices) => {
        setDevices(devices)
        devices.forEach((device) => {
            return `${device.label}`
        })
      })
   }, [])
   return device
}