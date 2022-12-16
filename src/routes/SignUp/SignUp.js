import React, { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formHandler = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };
  return (
    <div className="signup">
      <h2 className="signup-title">Sign Up</h2>
      <form onSubmit={formHandler} className="signup-form">
        <input
          type="email"
          placeholder="username"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
