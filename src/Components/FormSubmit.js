import React, { Component } from 'react'


class FormSubmit extends Component{
    constructor(){
        super();
        this.state={
            user:null,
            password:null
        }
    }

    submit(){
        console.log(this.state);
    }
    render(){
        return (
            <div>
                <h1>Forms</h1>

                <input type="text" name="user" onChange={(e)=>{this.setState({user:e.target.value})}}/>
                <br/><br/>
                <input type="password" name="pass" onChange={(e)=>{this.setState({password:e.target.value})}}/>
                <br/><br/>
                <button onClick={()=>{this.submit()}}>Submit</button>
            </div>
        )
    }
}


export default  FormSubmit;