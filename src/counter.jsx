import React from 'react'
import { useState } from 'react'
function Counter() {
  let [count, setCount] = useState(5)
  const addFunc =() =>{ 
    setCount(count + 1)
    setCount((count) => count + 1)//callback counter used here provides previous state of counter
    console.log(count)

  }
  const subtractFunc =() =>{
    setCount((count - 1)<0 ?count:count-1)
    setCount((count) => (count - 1)<0 ?count:count-1)
    console.log(count)
  }
  return (
    <>
      <h1 >This is a counter using hooks: {count} </h1><br/>
      <button onClick={addFunc}>Add by 2 </button>
      <h3>Result: {count}</h3><br/>
      <button onClick={subtractFunc}>Subtract by 2 </button>
      <h3>Result: {count}</h3><br/>
    </>
  )
}

export default Counter
