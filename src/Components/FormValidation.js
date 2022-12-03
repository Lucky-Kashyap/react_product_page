

import React, { Component } from 'react'

class FormValidation extends Component {

    constructor(){
        super();
        this.state={
            name:"",
            password:"",
            nameError:'',
            passError:""
        }
    }

    valid(){

        if(!this.state.name.includes('@') && this.state.password.length<5){
            this.setState({nameError:"Invalid name",passError:'Invalid password'})
        }
        else if(!this.state.name.includes('@')){
            this.setState({nameError:"Invalid name"});}
        else if(this.state.password.length<5){
            this.setState({passError:'Invalid password'})
        }
        else{
            return true;
        }
    }

    submit(){
        console.log(this.state);
        // alert('submit form');

        this.setState({nameError:"",passError:''})

        if(this.valid()){
            alert('form has been submitted');
        }
    }
  render() {
    return (
      <div>
        <h1>FormValidation</h1>
        <input type="text" onChange={(e)=>{this.setState({name:e.target.value})}}/>
        <input type="password" onChange={(e)=>{this.setState({password:e.target.value})}}/>

        <p style={{color:'red',fontSize:'14px'}}>{this.state.nameError}</p>
        <p style={{color:'red',fontSize:'14px'}} >{this.state.passError}</p>
        <button onClick={()=>this.submit()}>Submit</button>
      </div>
    )
  }
}


export default FormValidation;

