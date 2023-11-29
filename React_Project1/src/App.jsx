import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  const addvalue = () => {
    counter = counter + 1
    setCounter(counter)
  }
  const removevalue = () => {
    counter = counter - 1
    setCounter(counter)
  }

  return (
    <>
        <h1> Abhi ki Jaan</h1>
        <h2> Counter value : {counter}</h2>
        <button onClick={addvalue}>ADD VALUE</button>
        <br/>
        <button onClick={removevalue}>REMOVE VALUE</button>
    </>
  )
}

export default App
