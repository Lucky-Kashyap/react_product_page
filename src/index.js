// var React = require('react');

// var ReactDOM = require('react-dom');

import React from "react";

import ReactDOM from "react-dom";

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// ReactDOM.render(<h1>Hello World</h1>,document.getElementById('root'));

// ReactDOM.render( /*#__PURE__*/React.createElement("h1", null, "Hello World"), document.getElementById('root'));

// var h1 = document.createElement('h1');
// h1.innerHTML = "Heading React JS";

// document.getElementById('root').appendChild(h1);

// In React v 16 it is possible for render() to return an array of elements

// ReactDOM.render(<div><h1>Hello World</h1> <p>Like</p> <a href="https://www.google.com" target={"_blank"}>google</a> </div>,document.getElementById('root'));

// ReactDOM.render([<h1>Hello World</h1>, <p>Like</p>, <a href="https://www.google.com" target={"_blank"}>google</a> ],document.getElementById('root'));

// ReactDOM.render(
//   <>
//     <h1>Hello World</h1> <p>Like</p>
//     <a href="https://www.google.com" target={"_blank"}>
//       google
//     </a>
//   </>,
//   document.getElementById("root")
// );


// React.Fragment


// ReactDOM.render(
//   <React.Fragment>
//     <h1>Hello World</h1> <p>Like</p>
//     <a href="https://www.google.com" target={"_blank"}>
//       google
//     </a>
//   </React.Fragment>,
//   document.getElementById("root")
// );


// ReactDOM.render(
//   <div>
//     <h1>Hello World</h1> <p>Like</p>
//     <a href="https://www.google.com" target={"_blank"}>
//       google
//     </a>
//   </div>,
//   document.getElementById("root")
// );



ReactDOM.render(
  <App />,
  document.getElementById("root")
);
