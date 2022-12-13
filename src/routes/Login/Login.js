import React from "react";
import "./Login.css";

const Login = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <h3>Login</h3>
      <form className="login-form" onSubmit={submitHandler}>
        <input placeholder="username" />
        <input placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

