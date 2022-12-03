import React, { Component } from "react";
// import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import Heading from './Components/Heading';
import Para from './Components/Para';
// import List from './Components/List';

// import Hide from './Components/Hide'
// import User from "./Components/User";
// import Hooks from "./Components/Hooks";
// import Forms from "./Components/Forms";
// import FormSubmit from "./Components/FormSubmit";
// import FormValidation from "./Components/FormValidation";
// import Listing from "./Components/Listing";
// import Style from "./Components/Style";
import Navbar from "./Components/call_api/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Callingapi from "./Components/Callingapi";
import Data from "./Components/call_api/Data";
import Product from "./Components/call_api/Product";

class App extends Component{

    constructor(){
        super();
        this.state={
            toggle:true
        }
    }

    render(){
    return(
        <div>

        {/* <Heading /> */}
        {/* <Para /> */}
        {/* <List/> */}
        {/* <Hide/> */}

        {/* {
            this.state.toggle?  <User/>:null
        } */}

        {/* <button onClick={()=>{this.setState({toggle:!this.state.toggle})}}>Delete</button> */}

      {/* <Hooks/> */}
      {/* <Forms/> */}
      {/* <FormSubmit/> */}
      {/* <FormValidation/> */}
      {/* <Listing/> */}
      {/* <Style data="apply"/> */}

     {/* <Router>

     <Link to="">Home</Link>
     <Link to="/about">About</Link>
     <Link to="/contact">Contact</Link>
     <Link to="/navbar">Navbar</Link>


     <Route exact path="/" component={Home}/>
     <Route path="/about" component={About}/>
     <Route path="/contact" component={Contact} />
     <Route path="/navbar" component={Navbar} />
     <Navbar/>
      <Home/>
      <Contact/>
    <About/>
     </Router> */}

     {/* <Callingapi/> */}

     {/* <Data/> */}
     <Navbar/>

     <Product/>
     {/* hello */}
        </div>
    )
}}



export default App;