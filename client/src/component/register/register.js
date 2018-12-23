import React from 'react';
import Login from '../login/login';
import { Link, Route, Router } from 'react-router-dom';
import * as api from '../../api/api';
import  RegisterBase from './registerBase';
class Register extends RegisterBase {
  
  render() {
    return (
      <div>
        <meta charSet="utf-8" />
        <title>Create An Account</title>

        
        <div className="container">
          <div className="content">
            <div className="content_rgt">
              <div className="register_sec">
                <h1>Create An Account</h1>
                <form>
                  <ul>
                    <li><span>Username</span><input type="text" name="username" placeholder="Enter your username" onChange={(e) => { this.handleChange("username", e) }} required /></li>
                   <li><span> {this.state.usernameError && "please fill the username"}</span></li>
                    <li><span>Password</span><input type="password" username="password" placeholder="Enter your password" onChange={(e) => { this.handleChange("password", e) }} required /></li>
                   <li><span> {this.state.passwordError && "please fill the password "}</span></li>
                   <li><span> {this.state.passwordLenError && "password must be of length 6 or more "}</span></li>
                    
                    <li><span>Email</span><input type="email" name="email" placeholder="Enter your email" onChange={(e) => { this.handleChange("email", e) }} required /></li>
                    <li><span> {this.state.emailError && "please fill the email"}</span></li>
                    <li><span> {this.state.emailSyntax && "please fill the valid email"}</span></li>
                  
                    <li><span>First Name</span><input type="text" name="firstname" placeholder="Enter your first name" onChange={(e) => { this.handleChange("firstname", e) }} required /></li>
                    <li><span> {this.state.firstnameError && "please fill the firstname"}</span></li>

                    <li><span>Last Name</span><input type="text" name="lastname" placeholder="Enter your last name" onChange={(e) => { this.handleChange("lastname", e) }} required /></li>
                    <li><span> {this.state.lastnameError && "please fill the lastname"}</span></li>

                    <li><input type="submit" defaultValue="Register" onClick={(e)=>{this.registerFunc(e)}} /></li>

                  </ul></form>
                <div className="addtnal_acnt">I already have an account.<Link to="/login">Login My Account !</Link></div>
              </div>
            </div>
            <div className="content_lft">
              <h1>Welcome from PPL!</h1>
              <p className="discrptn">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
              <img src="images/img_9.png" alt /> </div>
              {(this.state.noError) && <h1>please verify your email</h1>}
              {<h1>{this.state.errorApi}</h1> || ""}
              
          </div>
        </div>
        <div className="clear" />

      </div>
    );
  }
}
export default Register;

/*
post('first').then((data) => {
  console.log("inside then", data);
}).catch((err) => {
  console.log("inside catch", err);
});

new Promise((resolve, reject) => {
  function post(one) {
    if(one === 'first') {
      resolve('success');
      // two('success');
    } else {
      // resolve('failure');
      reject('failure');
      // two('failure');
    }
  }
})*/
