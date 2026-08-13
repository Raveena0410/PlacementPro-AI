import React, { useState } from "react";
import "./Login.css";
import axios from 'axios';

const Login = () => {
  const[name,setName]=useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
  try{
    const res=await axios.post('http://localhost:5000/api/login',{
      name,
      email,
      password
    })
    
  }
  catch(err){
    console.log(err);
  }
}

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

        <form className="login-form" onSubmit={handleLogin}>
          <div className="login-field">
            <label htmlFor="name">Name</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div className="login-field">
            <label htmlFor="email">Email</label>
            <input
              type="name"
              id="name"
              placeholder="Enter your name"
              onChange={(e)=>setName(e.target.value)}
            />
          </div>

          <div className="login-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              onChange={(e)=>setpassword(e.target.value)}
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
