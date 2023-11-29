import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  

  return (
    <>
        <h1 className='bg-green-400 text-whiter rounded-xl mb-4'>test tailwind</h1>
        <Card username="abhi" visit="always"/>
        <Card username="ritu" visit="now"/>
    </>
  )
}

export default App
