import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/Images/image01.jpg";
import "./SignUpSection.css";

const SignUpSection = () => {
  return (
    <div className="signup-section">
      <img src={img} alt="bitcoin" />
      <div className="signup-message">
        <h2>Start your portfolio today</h2>
        <p>Take control of your money</p>
        <p>Simply and securely buy, sell and trade</p>
        <p>Get started with a free account today</p>
        <Link to='/sign-up'>
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default SignUpSection;
