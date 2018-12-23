import React from 'react';
import * as api from '../../api/api';
class RegisterBase extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          username: "",
          password: "",
          email: "",
          firstname: "",
          lastname: "",
          usernameError: false,
          emailError: false,
          PasswordError: false,
          firstnameError: false,
          lastnameError: false,
          noError:null,
          errorApi: null,
          passwordLenError:false,
           emailSyntax:false,
    
    
    
    
        }
        this.handleChange = this.handleChange.bind(this);
        this.registerFunc = this.registerFunc.bind(this);
        // console.log("this is in the constructor");
      }
      componentWillMount() {
        if (localStorage.getItem("user")) {
          this.props.history.push("/home");
        }
        else {
          this.props.history.push('/signup');
        }
      }
    
    
    
      registerFunc(e) {
        e.preventDefault();
     console.log("in the register functionnnnnnnnnnnnnnnnn");
        if (this.state.username == '')  {
          this.state.userNameError = true;
          this.setState({});
          //  this.state.error=true;
          this.state.noError = false;
          return;
        }
      else  if (this.state.password == '' )  {
          this.state.passwordError = true;
           this.setState({});
          this.state.noError = false;
           
          //  this.state.error=true;
           
          return;
        }
        else if(this.state.email.indexOf("@")===-1 || this.state.email.indexOf(".com")===-1)
        {
          this.state.emailSyntax=true;
          this.setState({});
          this.state.noError=false;
        }
         else if(this.state.password.length<6)
        {
          this.state.passwordLenError=true;
          this.setState({});
          this.state.noError=false;
        }
        else  if (this.state.email == '')  {
          this.state.emailError = true;
           this.setState({});
          this.state.noError = false;
           
          //  this.state.error=true;
           
          return;
        }
      else  if (this.state.firstname == '')  {
          this.state.firstnameError = true;
           this.setState({});
          this.state.noError = false;
           
            // this.state.error=true;
           
          return;
        }
     else   if (this.state.lastname == '')  {
          this.state.lastnameError = true;
           this.setState({});
          this.state.noError = false;
           
           
          return;
        }
        else{
          this.state.noError=true;
          //this.setState({});
        }
        console.log(this.state.noError);
        if(this.state.noError){
          // this.setState({usernameError:false,firstnameError:false,lastnameError:false,emailError:false,passwordError:false})
          // this.setState({noError:false});
        console.log("in the register function");
        let data = {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
          firstname: this.state.firstname,
          lastname: this.state.lastname
        }
        api.post("/registerUser", data).then((data) => {
          console.log("Register API Response : ", data);
    
          (data.error) && this.setState({ errorApi: data.error ,noError:false});
         (!data.error) && this.setState({errorApi:""});
          // this.setState({noError: false });
    
        })
        // }
      }
    }
    
      handleChange(key, e) {
        console.log("the function is working properly",e.target.value);
        this.setState({ [key]: e.target.value });
      }
    



}

export default  RegisterBase;
