import { useState } from "react"

export const useCounter = () => {
 const [state, setState] = useState(0)

const increment = () => {
 setState((prevS) => prevS + 4)
}
    
const decrement = () => {
 setState((prevS) => prevS - 2)
}
const resetCounter = () => {
 setState(0)
}
 return{
  state,
  increment,
  decrement,
  resetCounter
 }
}