  export function useFormat(time: number){
      if(isNaN(time)) return

      const sign = time < 0 ? "-" : ""
      const abs = Math.abs(time)
      const min = Math.floor(abs / 60)
      const sec = Math.floor(abs % 60)

      return `${sign}${min}:${sec.toString().padStart(2, "0")}`
    }