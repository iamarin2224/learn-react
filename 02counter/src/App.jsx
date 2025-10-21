import { useState } from 'react'
import './App.css'

function App() {
  // setCounter is just a var name can be any
  // the parameter we pass in useState will be the default value of the counter
  let [counter, setCounter] = useState(10)

  // let counter = 15

  const addValue = () => {
    if (counter === 20) return
    counter += 1
    setCounter(counter)
    // console.log(counter);
  }

  const subValue = () => {
    if (counter === 0) return
    setCounter(counter-1)
    // console.log(counter);
  }

  return (
    <>
      <h1>Basic Counter App</h1>

      <h3>Counter Value: {counter}</h3>

      <button
      onClick={addValue}
      >Add Value to {counter}</button>

      <br/>

      <button
      onClick={subValue}
      >Subtract Value to {counter} </button>
    </>
  )
}

export default App
