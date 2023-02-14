import { useState } from "react";
import { Link } from "react-router-dom";
const NavList = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [ isOpen, setIsOpen] = useState(false);
   
  return (
    <div className="">
      <button className="block" onClick={()=>setIsOpen(!isOpen)}>
        <svg  className="w-8 h-8  hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      {true &&
      <div className=" right-0 w-32 bg-gray-100" >
        <ul className="">
          <li className="mx-2 my-3 p-1 rounded hover:bg-green-300">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-2 my-3 p-1 rounded hover:bg-green-300">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="mx-2 my-3 p-1 rounded hover:bg-green-300">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-2 my-3 p-1 rounded hover:bg-green-300">
            <Link to="/">Cart</Link>
          </li>
          <li className="mx-2 my-3 p-1 rounded hover:bg-green-300">
            <Link to="/insta-mart">Insta-Mart</Link>
          </li>
          <li className="mx-2 my-3 p-1 rounded hover:bg-green-300">
            <Link to="/login" onClick={() => setIsLoggedIn(!isLoggedIn)}>
              {!isLoggedIn ? "Login" : "Logout"}
            </Link>
          </li>
        </ul>
      </div>
      }
    </div>
  );
};

export default NavList;
