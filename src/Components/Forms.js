

import React, {useEffect,useState} from 'react';

const Forms = () => {
    const [count,setCount]=useState(1);

    useEffect(()=>{
        console.log(count);
    },[count==5])

    return (
      <div>
        <h1>Use Effect Hooks in React js ... {count}</h1>
        <button onClick={()=>setCount(count+1)}>Update State</button>
      </div>
    )
  
}



export default Forms;
