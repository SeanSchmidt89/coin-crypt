import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Nav.css";

const Nav = () => {
  const cartNumber = useSelector((state) => state.cart.totalQuantity);
  return (
    <div className="nav">
      <Link to="/">
        <h1>Coin Crypt</h1>
      </Link>
      <div className="nav-btns">
        <Link href="/">Home</Link>
        <Link href="/">Profile</Link>
        <Link href="/">Login</Link>
        <Link href="/">SignUp</Link>
        <Link to="/cart" className="cart-link">
          Cart {cartNumber ? cartNumber : null}
        </Link>
      </div>
    </div>
  );
};

export default Nav;
