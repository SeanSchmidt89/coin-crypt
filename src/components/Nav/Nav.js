import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <a href="/"><h1>Coin Crypt</h1></a>
      <div className="nav-btns">
        <a href="/">Home</a>
        <a href="/">Profile</a>
        <a href="/">Login</a>
        <a href="/">SignUp</a>
      </div>
    </div>
  );
};

export default Nav;
