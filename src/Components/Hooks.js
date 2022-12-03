
import React, { useState } from 'react'

function Hooks() {

    const [count,setCount]=useState(0);
  return (
    <div>
    <h1>Hooks</h1>
    <p>{count}</p>

    <button onClick={()=>setCount(count+1)}>Counter update</button>
    
    </div>
  )
}

export default Hooks