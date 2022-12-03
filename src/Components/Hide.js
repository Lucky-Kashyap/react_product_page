import React, { Component } from 'react';


class Hide extends Component{

    constructor(){
        super();
        this.state={
            name:'Lucky',
            count:0,
            show:true,
            active:null,
            who:null
        }
    }

    componentDidUpdate(){
        console.log("update");
        if(this.state.who==null){
            this.setState({who:'lucky'});
        }
        // this.setState({who:'lucky'});
    }

    render(){
        // alert("render");
        return(
            <div>
                <h1>{this.state.name}</h1>
                <p>{this.state.count}</p>
                <p>{this.state.who}</p>

                {
                    this.state.show?<h2>Show Heading</h2>:null
                }


                <button onClick={()=>this.setState({show:!this.state.show})}>Toggle</button>
                <button onClick={()=>this.setState({count:this.state.count+1})}>counter</button>
                {/* <button onClick={()=>{this.setState({name:'divyanshu'})}}>click</button> */}
                {/* <button onClick={()=>{this.setState({count:this.state.count+1})}}>count</button> */}
                <button onClick={()=>{this.setState({active:'yes'})}}>Activate</button>
            </div>
        )
    }
}

export default Hide;