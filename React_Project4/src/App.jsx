import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  
  const [length, setLength] = useState(6)

  const [numberAllow, setnumberAllow] = useState(false)

  const [characterAllow, setcharacterAllow] = useState(false)

  const [password, setpassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstvwxyz"
    if(numberAllow) str += "0123456789"

    if(characterAllow) str+= "!@$%^&*()~`{}[]+_-"

    console.log(str)
    for(let i = 1; i <= length; i++) {
       let index = Math.floor(Math.random() * str.length + 1)
       pass += str.charAt(index)
    }

    setpassword(pass)

  }, [length, numberAllow, characterAllow, setpassword])

  const copyPassword = useCallback(() =>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)

  },[[password]])
  
  useEffect(() => {passwordGenerator()}, [length, numberAllow, characterAllow, setpassword])

  return (
    <>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg bg-gray-700 px-4 py-4 my-8 text-orange-500'>
          <h1 className='text-white text-2xl my-6 mx-12'>Password Generator</h1>
              <div className='flex shadow rounded-lg overflow-hidden mb-4'>
                  <input
                  type="text"
                  value={password}
                  className='outline-none w-full py-1 px-3'
                  placeholder='password'
                  readOnly
                  ref={passwordRef}
                  />
                  <button onClick={copyPassword} className='bg-blue-700 text-white pb-1 
                  font-mono px-3 py-0.5 focus:outline-none focus:ring hover:bg-blue-800 active:bg-blue-300 '>COPY</button>
              </div>
              <div className='flex text-sm gap-x-2'>
                <input
                  type='range'
                  min={6}
                  max={40} 
                  value={length}
                  onChange={(e) => {setLength(e.target.value)}} 
                />
                <level>Length ({length})</level>
              <div className='flex item-center gap-x-1 text-x'>
                <input 
                  type='checkbox'
                  defaultChecked={numberAllow}
                  id='numberInput'
                  onChange={()=> {setnumberAllow((prev) => !prev)}}
                  />
                  <label htmlFor='numberInput'>Number</label>
              </div>
              <div className='flex item-center gap-x-1'>
                <input 
                  type='checkbox'
                  defaultChecked={characterAllow}
                  id='numberInput'
                  onChange={()=> {setcharacterAllow((prev) => !prev)}}
                  />
                  <label htmlFor='numberInput'>Character</label>
              </div>
              </div>
              
        </div>
    </>
  )
}

export default App
