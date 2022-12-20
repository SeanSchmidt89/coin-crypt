import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Nav.css";

const Nav = () => {
  const cartNumber = useSelector((state) => state.cart.totalQuantity);
  return (
    <div className="nav">
      <Link to="/">
        <h1>COIN CRYPT</h1>
      </Link>
      <div className="nav-btns">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
        <Link to="/sign-up">SignUp</Link>
        <Link to="/cart" className="cart-link">
          Cart {cartNumber ? cartNumber : null}
        </Link>
        <FaBars className="hamburger" size={22} />
      </div>
    </div>
  );
};

export default Nav;
