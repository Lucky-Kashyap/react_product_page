
import React, { Component } from 'react'

export default class Callingapi extends Component {

    constructor(){
        super();
        this.state={
            products:null}
    }

    componentDidMount(){
        fetch('https://reqres.in/api/users').then((res)=>{
       
            // console.log(res);
            return res.json();
        }).then((data)=>{this.setState({products:data})})
    }
  render() {
    return (
      <div>
        <h1>Calling API</h1>

        {
            this.state.products?
            this.state.products.map((item)=>{
                return (<div key={item.id}>
                    <ul>
                        <li>{item.logo} - {item.price} - {item.image}</li>
                    </ul>
                </div>)
            }):null
        }
      </div>
    )
  }
}
