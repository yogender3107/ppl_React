import React from 'react';
import * as api from '../../api/api';
class LoginBase extends React.Component
{
    constructor(props) {
        super(props);
        this.state =
          {
            email: "",
            password: "",
            error: false,
            wrongUser: null,
            emailError:false,
            passwordError:false,
          }
        this.handleChange = this.handleChange.bind(this);
        this.loginfunc = this.loginfunc.bind(this);
      }
      componentWillMount() {
        if (localStorage.getItem("user")) {
          this.props.history.push("/home");
        }
        else {
             
          this.props.history.push('/login');
        }
      }
      handleChange(key, e) {
        this.setState({ [key]: e.target.value });
      }
      loginfunc(e) {
        e.preventDefault();
        
        if(this.state.email=='')
        {
    this.state.emailError=true;
    this.setState({});
    this.state.error=true;
        }
        else if(this.state.password=='')
        {
        this.state.passwordError=true;
        this.setState({});
        this.state.error=true;
        }
        // if (this.state.password == "" || this.state.email == "") {
        //   console.log("state.......", this.state);
        //   this.state.error = true;
        //   this.setState();
        // }
        else{
          this.state.error=false;
          this.setState({});
        }
        // // console.log("state",this.state.error);  
        if (!this.state.error) {
          api.post("/login", { "email": this.state.email, "password": this.state.password, "status":"active" }).
            then((data) => {
              if (data.error) {
                 this.setState({ wrongUser: data.error });
              }
              
              else {
                localStorage.setItem("user", JSON.stringify(data))
                this.props.history.push('/home');
              }
            }).
            catch(() => { })
        }
      }

}
export default LoginBase;