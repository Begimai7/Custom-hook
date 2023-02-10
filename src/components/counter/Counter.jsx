import React from 'react'
import styled from 'styled-components'
import { useCounter } from '../../hooks/useCounter'

export const Counter = () => {
const {state, increment, decrement, resetCounter} = useCounter()
  return (
    <Container>
    <Container>
     <Button onClick={decrement}>decrement</Button>
      <p>{state}</p>
      <Button onClick={increment}>increment</Button>
    </Container>
    <Button onClick={resetCounter}>Reset</Button>
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
 
 
`
const Container = styled.div`
 display: flex;
 justify-content: center;
 margin: auto;
 text-align: center;
 align-items: center;
 background-color: #ffc850;
 width: 500px;
 border-radius: 10px;
 padding: 20px;
 p{
  color: white;
  font-size: 25px;
  padding: 20px;
 }
`