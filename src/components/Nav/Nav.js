import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserAuth } from "../../context/AuthContext";
import "./Nav.css";

const Nav = () => {
  const cartNumber = useSelector((state) => state.cart.totalQuantity);
  const [sideNavActive, setSideNavActive] = useState(false);
  const { userName, logOut } = UserAuth();

  const sideNavHandler = () => {
    setSideNavActive(!sideNavActive);
  };

  const logOutHandler = () => {
    logOut();
  };

  return (
    <div className="nav">
      <Link to="/">
        <h1>COIN CRYPT</h1>
      </Link>
      {userName && (
        <div className="logged-in">
          Welcome, {userName}
          <button onClick={logOutHandler}>logout</button>
        </div>
      )}
      <div className={!sideNavActive ? "nav-btns" : "show-side-nav"}>
        <Link to="/" onClick={sideNavHandler}>
          Home
        </Link>
        <Link to="/profile" onClick={sideNavHandler}>
          Profile
        </Link>
        {!userName && (
          <Link to="/login" onClick={sideNavHandler}>
            Login
          </Link>
        )}
        {!userName && (
          <Link to="/sign-up" onClick={sideNavHandler}>
            SignUp
          </Link>
        )}
        <Link to="/cart" onClick={sideNavHandler} className="cart-link">
          Cart {cartNumber ? cartNumber : null}
        </Link>
      </div>
      {!sideNavActive ? (
        <FaBars onClick={sideNavHandler} className="hamburger" size={20} />
      ) : (
        <FaTimes onClick={sideNavHandler} className="x" size={20} />
      )}
    </div>
  );
};

export default Nav;