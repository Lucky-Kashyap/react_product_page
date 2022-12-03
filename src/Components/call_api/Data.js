

import React, { Component } from 'react'

class Data extends Component {

    constructor(){
        super();
        this.state = {products:[{id:123,name:'Tulsi Arka',price:600},
        {id:124,name:'Tulsi Arka',price:600},
        {id:125,name:'Tulsi Arka',price:600},
        {id:126,name:'Tulsi Arka',price:600},
        {id:127,name:'Tulsi Arka',price:600},
        {id:128,name:'Tulsi Arka',price:600},
        {id:129,name:'Tulsi Arka',price:600},]}
    }
  render() {
    return (
      <div>
        <h1>Data Products</h1>

        {this.state.products.map((item)=>

        (<div>
            <h1>{item.name}</h1>
            <h2>{item.price}</h2>
            <p>{item.name}</p>
        </div>)
        
        )}
      </div>
    )
  }
}


export default  Data;
