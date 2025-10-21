import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    name: "arin",
    age: "19",
    college: "ju"
  }
  return (
    <>
      <p className='bg-black rounded-xl max-w-md py-4 mb-4 mx-auto text-3xl text-white'>Tailwind Test</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <Card name="Cycling" link="https://images.pexels.com/photos/33447081/pexels-photo-33447081.jpeg" someObj={myObj}/>
        <Card name="Cities" link="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg"/>
        <Card name="Mountains" link="https://images.pexels.com/photos/763097/pexels-photo-763097.jpeg"/>
      </div>
    </>
  )
}

export default App
