import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter]=useState(15)
  // let counter= 5;

  let addValue =() => {
    if(counter<20){
      counter=counter+1;
      setCounter(counter)
    }
  }

   let decrementValue =() => {
    if(counter>0) {
      counter=counter-1;
    setCounter(counter)
    }

  }

  return (
    <>
    <h1>Counter Project</h1>
    <h2>counter vallue : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={decrementValue}>Decement value</button>
    </>
  )
}

export default App
