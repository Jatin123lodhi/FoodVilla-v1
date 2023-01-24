import { useState } from "react";
import { Link } from "react-router-dom";
const NavList = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
          <Link to="/insta-mart">Insta-Mart</Link>
        </li>
        <li>
          <Link to="/login" onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {!isLoggedIn ? "Login" : "Logout"}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavList;