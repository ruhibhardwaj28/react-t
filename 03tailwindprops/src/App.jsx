import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import './components/Card'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <h1 className='bg-green-400 text-color-black pd-10 rounded-xl '>Tailwind Test</h1>
      <Card channelname='sagar' btntext='click me' />
      <Card channelname='ruhi' btntext='visit me'/>
    </>
  )
}

export default App
