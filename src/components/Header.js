import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline.js";
import UserContext from "../utils/UserContext.js";
import Logo from "./Logo.js";
// import NavList from "./NavList.js";
import { useSelector } from "react-redux";
import store from "../utils/store.js";
const Header = () => {
  const { user } = useContext(UserContext);
  const isOnline = useIsOnline();
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);
  let itemsCount = 0;
  cartItems.map((obj) => {
    itemsCount += obj.quantity;
  });
  //console.log(cartItems, " store");
  return (
    <div className="md:flex md:justify-between px-4  bg-slate-100 drop-shadow-lg">
      <div className="flex  items-center justify-between">
        <Logo />

        {/* <h4 className="px-2 hidden py-4 lg:block">{user.name}</h4> */}

        {/* <NavList /> */}
        <Link to="/">
          <h1 className="px-4  lg:px-32 text-orange-500 text-2xl lg:text-4xl  py-4 ">
            Food Villa
          </h1>
        </Link>
        <h5 data-testid="online-status" className=" py-4 ">
          {isOnline ? "✅" : "🔴 Offline"}
        </h5>
        <button className="block md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-8 h-8  hover:cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            {!isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        className={
          "px-2 pb-2 " + (isOpen ? " block " : " hidden ") + "md:block"
        }
      >
        <ul className="md:flex ">
          <Link to="/">
            <li className="px-2 mx-2 my-3 p-1 rounded hover:bg-green-300">
              Home
            </li>
          </Link>
          <Link to="/contact">
            <li className="px-2 mx-2 my-3 p-1 rounded hover:bg-green-300">
              Contact
            </li>
          </Link>
          {/* <Link to="/about">
            <li className="px-2 mx-2 my-3 p-1 rounded hover:bg-green-300">
              About
            </li>
          </Link> */}
          {/* <Link to="/insta-mart">
            <li className="px-2 mx-2 my-3 p-1 rounded hover:bg-green-300">
              Insta-Mart
            </li>
          </Link> */}
          <Link to="/NewCart">
          <div className="flex mx-2  items-center">
          <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            <li data-testid="cart" className="px-1  my-3 p-1 rounded hover:bg-green-300">
             
              Cart - {itemsCount} items
            </li>
            </div>
          </Link>
          {/* <li className="mx-2 my-3 p-1 rounded hover:bg-green-300">
            <Link to="/login" onClick={() => setIsLoggedIn(!isLoggedIn)}>
              {!isLoggedIn ? "Login" : "Logout"}
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
