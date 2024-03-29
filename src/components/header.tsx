import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import githubLogo from "../assets/images/github.png";
import { Link, NavLink } from "react-router-dom";
import CartModal from "./Cart";
import React,{ useContext } from "react";
import { CartContext } from "./CartContext";

const Header = () => {
  // Add black background to header on scroll
  window.onscroll = () => {
    const navBar = document.getElementById("nav");
    if(navBar) {
    if (document.documentElement.scrollTop >= 30)
      navBar.classList.add("bg-black");
    else navBar.classList.remove("bg-black");
  }
  };

  const { products, showCart, setShowCart } = useContext(CartContext);

  return (
    <header
      id="nav"
      className="bg-gradient-to-b from-black/75 fixed w-screen h-24 z-50
        transition-colors duration-500 hover:bg-black"
    >
      <h1
        className=" drop-shadow-xl text-4xl font-viola font-bold text-center text-white mt-2 tracking-[9px]
         mb-0"
      >
        Brand
      </h1>
      <nav className="text-center mt-0 pt-0">
        <ul className=" mt-0 flex justify-center text-white font-futura gap-7 text-xs">
          <li className=" mt-0">
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                };
              }}
            >
              Home
            </NavLink>
          </li>
          <li className="mt-0">
            <NavLink
              to="/men"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                };
              }}
            >
              Men
            </NavLink>
          </li>
          <li className="mt-0">
            <NavLink
              to="/women"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                };
              }}
            >
              Women
            </NavLink>
          </li>
          <li className="mt-0">
            <NavLink
              to="/about"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                };
              }}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <FontAwesomeIcon
          onClick={() => setShowCart(!showCart)}
          icon={faCartShopping}
          className=" cursor-pointer text-white size-5
          absolute right-28 top-10"
        />
        <p className=" absolute right-[102px] top-8 bg-red-600 font-futura text-center w-4 h-4 text-hs text-white rounded-full ">
          {products}
        </p>
        {showCart && (
          <CartModal showCart={showCart} setShowCart={setShowCart} />
        )}
      </div>
      <Link to="/search">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="  text-white size-5
          absolute right-16 top-10"
        />
      </Link>
      <a href="https://github.com/nicopressez" target="_blank" rel="noreferrer">
        <div className="absolute left-10 top-8 block">
          <img
            src={githubLogo}
            className="size-3 inline text-white mb-1
            "
          ></img>
          <p className="inline font-futura text-white pl-2 text-sm">
            Nicolas Pressez
          </p>
        </div>
      </a>
    </header>
  );
};

export default Header;
