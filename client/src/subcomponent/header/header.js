import React from 'react';
import { Link } from "react-router-dom"; 
import * as api from '../../api/api';
import Home from '../../component/home/home';
import HeaderBase from './headerBase';

class Header extends HeaderBase {
  constructor(props)
  {
    super(props);
  
    
    this.logOut= this.logOut.bind(this);
  }
  logOut()
  {
    localStorage.removeItem("user");
  }
 

  render() {
    
    let user = localStorage.getItem("user")
    let userJson = JSON.parse(user);
  
  

    return (
      <div>
        <link href="css/bootstrap.css" rel="stylesheet" type="text/css" />
        <link href="css/bootstrap-responsive.css" rel="stylesheet" type="text/css" />
        <div className="navbar navbar-inverse navbar-fixed-top">
          <div className="navbar-inner">
            <div className="container">
              <button type="button" className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"> <span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" /> </button>
              <a className="brand" href>PPL</a>
              <div className="pro_info pull-right">
                <div className="pro_icn dropdown"><img src="images/pic_small.png" /></div>
                <div className="pro_txt dropdown" ><b className="caret" /></div>


                <div className="dropdown-content">

                  <Link to="/login"><p >Log out!</p></Link>
                </div>
              </div>

              <div className="nav-collapse collapse">
                <ul className="nav">
                  <li className="active"> <Link to="/home">Home</Link> </li>
                  <li className> <a href>E-Coupons</a> </li>
                  <li className> <a href>E-Brands</a> </li>
                  <li className> <a href>Resuse Market</a> </li>
                  <li className> <a href>Lost and Found</a> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header">
          <div className="header_lft">
            <div className="logo"><Link to="/home">><img src="images/logo.png" /></Link></div>
            <div className="navigatn">
              <ul>
                <li><Link to="/home">Home</Link></li>
                <li><a href="#"> E-Coupons </a></li>
                <li><a href="#">E-Brands </a></li>
                <li><a href="#"> Resuse Market </a></li>
                <li><a href="#"> Lost and Found</a></li>
              </ul>
            </div>
          </div>
          <div className="header_rgt">
            <div className="flag_div"><img src="images/flag.png" /></div>
                    <input type="text" placeholder="Search Title" name="search" className="txt_box"   onKeyPress={this.handleKeyPress} onChange={(e)=>{this.handleChange("search",e)}} />
   
            <div className="msg_box"><a href="#"><span className="msg_count">100</span></a></div>
            <div className="info_div dropdown-new">
              <div className="image_div"> <img src="images/pic.png" /> </div>
              <div className="info_div1">{userJson && userJson.firstname }</div>
              
              <div className="dropdown-new-content">
                <Link to="/login"><p onClick={this.logOut}>Log out!</p></Link>
              </div>
            </div>
          </div>
        </div>
      </div>


    );
  }
}
export default Header;