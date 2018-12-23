import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../../api/api';
import LoginBase from './loginBase';
class Login extends LoginBase {

  render() {
    return (
      <div>
        <meta charSet="utf-8" />
        <title>Login Account</title>


        <div className="container">
          <div className="content">
            <div className="content_rgt">
              <div className="login_sec">
                <h1>Log In</h1>
                <ul>
                  <form>
                    <li><span>Email-ID</span><input type="email" name="email" placeholder="Enter your email" onChange={(e) => { this.handleChange("email", e) }} /></li>
                    {this.state.emailError && <li><span>Email-ID is mandatory</span></li>}

                    <li><span>Password</span><input type="password" name="password" placeholder="Enter your password" onChange={(e) => { this.handleChange("password", e) }} /></li>
                    {this.state.passwordError && <li><span>Password  is mandatory</span></li>}

                  </form>
                  {/* <li><input type="checkbox" />Remember Me</li> */}
                  <li><input type="submit" defaultValue="Log In" onClick={(event) => this.loginfunc(event)} /><a href>Forgot Password</a></li>
                </ul>
                <div className="addtnal_acnt">I do not have any account yet.<Link to="/signup">Create My Account Now !</Link></div>
              </div>
            </div>
            <div className="content_lft">
              <h1>Welcome from PPL!</h1>
              <p className="discrptn">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
              <img src="images/img_9.png" alt /> 
              <h1>{this.state.wrongUser || ''}</h1>
              
              </div>
              
          </div>
        </div>
        <div className="clear" />

      </div>
    );
  }
}
export default Login;