
import React, { Component } from 'react'


class User extends Component {

    componentWillUnmount(){
        alert('will un munt');
    }

    render(){
  return (
    <div>User
    <ul>
        <li>name</li>
        <li>roll no</li>
        <li>email</li>
    </ul>
    
    </div>
  )
}}


export default User;