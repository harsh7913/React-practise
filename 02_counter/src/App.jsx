import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  // let counter = 12;

  const addValue = () => {
    // console.log("value added" , Math.random());
    // counter = counter + 1;
    setCounter(counter + 1)
    // console.log("clicked now :", counter);
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>INDIAN INSTITUTE OF INFORMATION TECHNOLOGY ALLAHABAD</h1>
      <h2>counter value : {counter}</h2>
      <button
      onClick={addValue}>Add value</button>
      <br />
      <button
        onClick={removeValue}>Remove value : {counter}</button>
      <button>Footer : {counter}</button>
    </>
  )
}

export default App
