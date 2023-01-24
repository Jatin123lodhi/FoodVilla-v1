import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.js"
import NavList from "./NavList.js";

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
