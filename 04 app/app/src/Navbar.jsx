import React from 'react'

function Navbar(obj) {
  return (
    <div> 
        <h1>{obj.title}</h1>
        <h1>{obj.number}</h1>
    </div>
  )
}

export default Navbar