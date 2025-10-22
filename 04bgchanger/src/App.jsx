import { useState } from 'react'

function App() {
  const [color, setColor] = useState("bg-black")
  return (
    <>
      <div className={`w-screen h-screen ${color}`}>
          <div className="fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2">
            <div className='flex flex-wrap gap-3 justify-center bg-white border border-black rounded-3xl p-3'>
              <button 
              onClick={() => setColor("bg-red-600")}
              className='px-2 py-1 rounded-2xl text-white shadow-lg cursor-pointer border-2 border-black bg-red-600' 
              // style={{backgroundColor: "red"}}
              >Red</button>
              <button 
              onClick={() => setColor("bg-green-700")}
              className='px-2 py-1 rounded-2xl text-white shadow-lg cursor-pointer border-2 border-black bg-green-700' 
              >Green</button>
              <button 
              onClick={() => setColor("bg-blue-600")}
              className='px-2 py-1 rounded-2xl text-white shadow-lg cursor-pointer border-2 border-black bg-blue-600'
              >Blue</button>
              <button 
              onClick={() => setColor("bg-yellow-400")}
              className='px-2 py-1 rounded-2xl text-black shadow-lg cursor-pointer border-2 border-black bg-yellow-400' 
              >Yellow</button>
              <button 
              onClick={() => setColor("bg-orange-500")}
              className='px-2 py-1 rounded-2xl text-white shadow-lg cursor-pointer border-2 border-black bg-orange-500'
              >Orange</button>
              <button 
              onClick={() => setColor("bg-violet-700")}
              className='px-2 py-1 rounded-2xl text-white shadow-lg cursor-pointer border-2 border-black bg-violet-700'
              >Violet</button>
              <button 
              onClick={() => setColor("bg-pink-400")}
              className='px-2 py-1 rounded-2xl text-white shadow-lg cursor-pointer border-2 border-black bg-pink-400'
              >Pink</button>
              <button 
              onClick={() => setColor("bg-white")}
              className='px-2 py-1 rounded-2xl text-black shadow-lg cursor-pointer border-2 border-black bg-white'
              >White</button>
              <button 
              onClick={() => setColor("bg-black")}
              className='px-2 py-1 rounded-2xl text-white shadow-lg cursor-pointer border-2 border-gray-500 bg-black'
              >Black</button>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
