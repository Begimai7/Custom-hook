import { useEffect, useState } from "react"

export const useTimer = (start) => {
 const [seconds, setSeconds] = useState(59)
 const [valueTimer, setValueTimer] = useState()

 const getValueTimer = (e) => {
  setValueTimer(e.target.value)
 }

 useEffect(() => {

   const interval = setInterval(() => {
    if(start){
     setSeconds( seconds => seconds - 1)
    }
   
    return () => clearInterval(interval)

 }, 1000);
}, [start])

return{
 seconds,
 valueTimer,
 getValueTimer
}
} 