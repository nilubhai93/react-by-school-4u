import { useState } from "react"
import "./App.css"
import Navbar from "./navbar"

function App(){

    const[count, setCount]= useState(0);

    function increment() {
        setCount(count+1)
    }
    function decrement() {
       if (count ==0) {
        setCount = count
       } else {
         setCount(count-1)
       }
    }
    return(
        <div>
           <button onClick={increment}> increment </button>
           {count}
           <button onClick={decrement}> decrement </button>
        </div>
    )
}

// export default Component
export default App
 