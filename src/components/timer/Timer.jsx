import React from 'react'
import styled from 'styled-components'
import { useTimer } from '../../hooks/useTimer'

export const Timer = () => {
 const {seconds, valueTimer, getValueTimer} = useTimer()
  return (
    <Container>
     <input 
      type="number"
      value={valueTimer} 
      onChange={getValueTimer}/>
 
    <div>
     <Button>start</Button>
      <Button>stop</Button>
      <Button>restart</Button>
    </div>
     
    </Container>
  )
}
const Button = styled.button`
 padding: 10px 20px;
 border: none;
 border-radius: 8px;
 cursor: pointer;
 background-color: #136d6d;
 color: white;
 margin: 10px;
`
const Container = styled.div`
 background-color: #3c6422;
 width: 500px;
 align-items: ceter;
 margin: 2rem auto;
 padding: 20px;
 display: flex;
 flex-direction: column;

 input{
   width: 100px;
   padding: 20px;
   margin: 2rem auto;
   outline: none;
   border-radius: 9px;
   border: none;
   text-align: center;
   font-size: 20px;
 }
`

