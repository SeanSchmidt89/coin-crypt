import React from "react";
import "./SignUp.css";

const SignUp = () => {
  const formHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="signup">
      <h2 className="signup-title">Sign Up</h2>
      <form onSubmit={formHandler} className="signup-form">
        <input placeholder="username" />
        <input placeholder="password" />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
