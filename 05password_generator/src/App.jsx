import {useState, useCallback, useEffect, useRef} from 'react'

function App() {

  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passRef = useRef(null)

  const passGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+-[]{}?"

    for(let i=0; i<length; i++){
      let strInd = Math.floor(Math.random()*str.length)
      pass += str[strInd]
    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed])

  useEffect(() => {passGenerator()}, [passGenerator])

  const copyToClipboard = useCallback(() => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className='w-screen h-screen flex justify-center items-center'>
        <div className='mx-2 px-5 py-5 bg-gray-700 rounded-lg text-white'>
          <h1 className='text-4xl text-center text-white mb-8'>Password Generator</h1>
          <div className='flex shadow overflow-hidden rounded-lg'>
            <input 
            type="text" value={password} placeholder='Password' readOnly ref={passRef}
            className='bg-white rounded-l-lg text-gray-700 font-semibold px-2 py-1 w-full outline-none'
            />
            <button 
            onClick={passGenerator}
            className='bg-white text-gray-700 pr-1 cursor-pointer'>
            <i class="fa-solid fa-arrows-rotate"></i></button>
            <button
            onClick={copyToClipboard}
            className='bg-blue-700 active:bg-blue-900 text-white px-2 py-1 rounded-r-lg cursor-pointer'
            >Copy</button>
          </div>
          <div className='flex flex-wrap mt-5 gap-x-4 text-center'>
            <div className='flex items-center gap-x-2'>
              <input 
              type="range" min={4} max={32} value={length} id='len'
              onChange={(e) => {setLength(e.target.value)}}
              className='cursor-pointer w-25'
              />
              <label htmlFor='len'>
                Length: <span className="inline-block w-[1em]">{length}</span>
              </label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox" id="setNum" defaultChecked={numAllowed}
              className='cursor-pointer'
              onChange={() => setNumAllowed((prev) => !prev)}
              />
              <label htmlFor="setNum">Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox" id="setChar" defaultChecked={charAllowed}
              className='cursor-pointer'
              onChange={() => setCharAllowed((prev) => !prev)}
              />
              <label htmlFor="setChar">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
