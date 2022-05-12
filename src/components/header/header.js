import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import gograbmoneylogo from "..//..//image/gograbmoneylogo.png"
import {FiSearch} from "react-icons/fi"
import {MdAccountCircle} from "react-icons/md"
import {FaEnvelope,FaPhone} from "react-icons/fa"
import { useContext } from 'react'
import { UserContext } from '..//..//App'
const Header = () => {
  const { state} = useContext(UserContext)
  const RenderMenu = ()=>{
    if(state.user){
      return(
        <React.Fragment>      
        <div class="navbar-nav mr-auto">
                            <Link to="/" class="nav-item nav-link active">Home</Link>
                            <Link to="/latestproduct" class="nav-item nav-link">LATEST PRODUCTS</Link>
                            <Link to="/categories" class="nav-item nav-link">CATEGORIES</Link>
                            <Link to="/stores" class="nav-item nav-link">STORES</Link>
                            {/* <Link to="/referandearn" class="nav-item nav-link">REFER AND EARN</Link> */}
                            <Link to="/gethelp" class="nav-item nav-link">GET HELP</Link>
                            <Link to="/contact" class="nav-item nav-link">CONTACT US</Link>
                        </div>
                        <div class="navbar-nav ml-auto">
                            <div class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown"><MdAccountCircle style={{fontSize: "22px"}}/> My Account</a>
                                <div class="dropdown-menu">
                                    <Link to="/myprofile" class="dropdown-item">My Profile</Link>
                                    <Link to="/logout" class="dropdown-item">Logout</Link>
                                </div>
                            </div>
                        </div>
      </React.Fragment>
      )
    }
    else{
      return(
        <React.Fragment>      
        <div class="navbar-nav mr-auto">
                            <Link to="/" class="nav-item nav-link active">Home</Link>
                            <Link to="/latestproduct" class="nav-item nav-link">LATEST PRODUCTS</Link>
                            <Link to="/categories" class="nav-item nav-link">CATEGORIES</Link>
                            <Link to="/stores" class="nav-item nav-link">STORES</Link>
                            {/* <Link to="/referandearn" class="nav-item nav-link">REFER AND EARN</Link> */}
                            <Link to="/gethelp" class="nav-item nav-link">GET HELP</Link>
                        </div>
                        <div class="navbar-nav ml-auto">
                            <div class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">User Account</a>
                                <div class="dropdown-menu">
                                    <Link to="/login" class="dropdown-item">Login</Link>
                                    <Link to="/register" class="dropdown-item">Register</Link>
                                </div>
                            </div>
                        </div>
      </React.Fragment>
      )
    }
  } 
  return (
    <>
      <div class="top-bar">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6">
                        <FaEnvelope style={{fontSize: "20px"}}/> support@gograbmoney.com
                    </div>
                    <div class="col-sm-6">
                        <FaPhone style={{fontSize: "20px"}}/> +012-345-6789
                    </div>
                </div>
            </div>
        </div>
        <div class="nav">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                    <a href="#" class="navbar-brand">MENU</a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <RenderMenu />
                    </div>
                </nav>
            </div>
        </div>
      <div className="header-container">
      <div className="header-heading-container">
        <Link to="/" >
          <img src={gograbmoneylogo} alt = "" className="header-logo"/>
        </Link>
      </div>
      <div className="header-search-bar-container">
        <form className="search-bar-form">
          <input
            type="search"
            placeholder="Search for products,brands and more..."
            className="form-control"
          />
          <button type="submit" className="form-control">
            <FiSearch className="input-search-icon" color="#4AADC2"/>
          </button>
        </form>
      </div>
      <div className="header-nav-links-container">
        <Link to="/myprofile">
          My Earninigs : <span>₹25</span>
        </Link>
      </div>
    </div>
    </>
  );
};

export default Header 