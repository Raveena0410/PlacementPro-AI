import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">

      <div className="login-blob login-blob1"></div>
      <div className="login-blob login-blob2"></div>

      <div className="login-card">

        <h2 className="login-logo">PlacePrep</h2>

        <h3 className="login-title">Welcome Back</h3>

        <p className="login-subtitle">
          Login to continue
        </p>

        <form className="login-form">

          <div className="login-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="login-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
          <p className="signup-text">
  Don't have an account? <a href="/signup">Sign Up</a>
</p>

        </form>

      </div>

    </div>
  );
};

export default Login;
