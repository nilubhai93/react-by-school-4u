import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {

  let[count, setCount] = useState(0)

  function increment(){
    setCount(count+1)
  }

  function decrement(){
    if(count>0){
    setCount(count-1)
    }
    else count ==0
  }
  function reset(){
    setCount(0)
  }

  return (
    <>
      <h1> Counter App</h1>
      <p> Count : {count}</p>

      <div className='buttons'>
        {/* <button onClick ={increment}> ➕INCREMENT </button>
        <button onClick ={decrement}> ➖DECREMENT </button>
        <button onClick={()=>setCount(0)}>🔄️ RESET </button> */}

        <Button text="increment" func={increment}/>
        <Button text="decrement" func={decrement}/>
        <Button text="reset" func={reset}/>
      </div>
    </>
  )
}

export default App

