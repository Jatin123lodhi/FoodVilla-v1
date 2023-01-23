import React, { useState } from "react";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="logo" className="logo" />
    </Link>
  );
};

const NavList = () => {
  const [isLoggedIn,setIsLoggedIn]= useState(false);


  return (
    <div className="navlist">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">Cart</Link>
        </li>
        <li>
          <Link to="/login" onClick={()=>setIsLoggedIn(!isLoggedIn)} >{
            !isLoggedIn ? 'Login' : 'Logout'
          }</Link>
        </li>
      </ul>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Link to="/">
        <h1 style={{ color: "orange", fontStyle: "verdana" }}>Food Villa</h1>
      </Link>
      <NavList />
    </div>
  );
};

export default Header;
