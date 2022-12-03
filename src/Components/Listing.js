

import React, { Component } from 'react'

class Listing extends Component {

    constructor(){
        super();
        this.state={
            list:[
                {key:1,name:'lucky',phone:9634308605,email:'kashyap@gmail.com'},
                {key:2,name:'ajay',phone:96677605,email:'ajay@gmail.com'},
                {key:3,name:'rohit',phone:77657965675,email:'rohit@gmail.com'}
            ]
        }
    }
  render() {
    return (
      <div>
        <h1>Listing</h1>

        {
           this.state.list.map((item)=>{
           
            return  <div>
                <p>{item.name}</p>
                <p>{item.phone}</p>
                <p>{item.email}</p>
            </div>
           })
        }
      </div>
    )
  }
}


export default Listing;