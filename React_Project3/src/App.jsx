import { useState } from 'react'
import './App.css'

function App() {

  const [bodyColor, setbodyColor] = useState("white")


  const Black = () => {
    setbodyColor("Black")
  }
  const Yellow = () => {
    setbodyColor("yellow")
  }
  const Green = () => {
    setbodyColor("green")
  }
  const fuchsia = () => {
    setbodyColor("fuchsia")
  }
  const Pink = () => {
    setbodyColor("pink")
  }
  const Teal = () => {
    setbodyColor("teal")
  }
  

  return (
    
      <div className="fixed w-full h-screen py-8" style={{backgroundColor: bodyColor}}>
      <div className='flex flex-wrap justify-center inset-x-0 bottom-28'>
        <div className='flex flex-wrap bg-white px-4 py-3 rounded-xl'>
        <button onClick={() => setbodyColor("red")} className='bg-red-500 mr-2 rounded-xl px-5 py-2'>Red</button>
        <button onClick={() => setbodyColor("blue")} className='bg-blue-500 mr-2 rounded-xl px-6 py-2'>Blue</button>
        <button onClick={Black} className='bg-black text-white mr-2 rounded-xl px-6 py-2'>Black</button>
        <button onClick={Yellow} className='bg-yellow-500 mr-2 rounded-xl px-6 py-2'>Yellow</button>
        <button onClick={Green} className='bg-green-500 mr-2 rounded-xl px-6 py-2'>Green</button>
        <button onClick={fuchsia}className='bg-fuchsia-600 mr-2 rounded-xl px-6 py-2'>fuchsia</button>
        <button onClick={Pink}className='bg-pink-500 mr-2 rounded-xl px-6 py-2'>Pink</button>
        <button onClick={Teal} className='bg-teal-500 mr-2 rounded-xl px-6 py-2'>Teal</button>
        </div>
      </div>
      </div>
    
  )
}

export default App
