import { useState } from 'react'
import Counter from './counter.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1> Welcome to the Vite@React</h1>
      <Counter />
    </>
  )
}

export default App
