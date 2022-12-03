import React from 'react'
import './custom.css'

function Style(props) {

    const h2={
        color:'green',
        fontSize:'36px'
    }
    const h3={
        color:'red',
        fontSize:'24px'
    }
  return (
    <div>
        <h1 className='header'>React Global Style</h1>
        <h1 style={props.data=="apply"?h2:h3}>React Inline Style</h1>
    </div>
  )
}



export default Style;
