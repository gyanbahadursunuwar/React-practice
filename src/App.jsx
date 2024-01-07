import { useState } from 'react'
import Counter from './apps/counter.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [counterVisible, setCounterVisible]= useState(false)
  const handleCounterOnClick = () =>{
    setCounterVisible(!counterVisible);
  }
  return (
    <>
    <h1> Welcome to the React </h1>
    <h2>Please choose any app.</h2>
    <a href='#' onClick={handleCounterOnClick}>Counter</a> <br/>
    {counterVisible && <Counter/>}
    </>
  )
}

export default App
