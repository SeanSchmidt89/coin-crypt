import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Nav.css";

const Nav = () => {
  const cartNumber = useSelector((state) => state.cart.totalQuantity);
  const [sideNavActive, setSideNavActive] = useState(false);

  const sideNavHandler = () => {
    setSideNavActive(!sideNavActive);
  };
  return (
    <div className="nav">
      <Link to="/">
        <h1>COIN CRYPT</h1>
      </Link>
      <div className={!sideNavActive ? "nav-btns" : "side-nav-btns"}>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
        <Link to="/sign-up">SignUp</Link>
        <Link to="/cart" className="cart-link">
          Cart {cartNumber ? cartNumber : null}
        </Link>

        <div
          className={sideNavActive ? "show-side-nav" : "hide-side-nav"}
        ></div>
      </div>
      {!sideNavActive ? (
        <FaBars onClick={sideNavHandler} className="hamburger" size={20} />
      ) : (
        <FaTimes onClick={sideNavHandler} className="x" size={25} />
      )}
    </div>
  );
};

export default Nav;

function zipIt(women, men) {
  if (women.length !== men.length) {
    return "sizes don't match";
  }
  let newArr = [];
  for (let i = 0; i < women.length; i++) {
    newArr.push([women[i], men[i]]);
  }
  return newArr;
}
zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"]);
