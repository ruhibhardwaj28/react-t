import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 15;
  const addValue = ()=>{
    console.log('click here to add value', counter)
    
    setCounter(counter+1);

  }
  // const decValue = ()=> {
  //   counter = counter-1;
  //   console.log('click here to decrease value', counter);
  // }

  return (
    <>
    <h1>chai or react </h1>
    <h2>counter number: {counter}</h2>
    <button onClick={addValue}>Add value{counter}</button>
    <br />
    <button>Decrease Value{counter}</button>
    <p>this is paragraph {counter}</p>

    </>
  )
}

export default App
