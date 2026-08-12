import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const[email,setemail]=useState();
    const[password,setpassword]=useState();
    const[confirmpassword,setconfirmpassword]=useState();
    const navigate = useNavigate();
    const handle=async(e)=>{
        e.preventDefault();
        if (confirmpassword!==password){
            alert("passwords do not match");
            return;


        }
    try {
        const response = await axios.post('http://localhost:5000/api/signup', {
            email,
            password
        });
        navigate('/dashboard');

        console.log(response.data);
        alert("Signup successful!");
    } catch (error) {
        console.log(error);
        alert("Signup failed");
    }
};
  return (
    <>
    <div className="main">
       <h1>PlacePrep</h1>
        <h2>
            Create Account
        </h2>
        <p>Sign up to get started</p>
         
        <form onSubmit={handle}>
            
            <div className="sign">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={(e) => setemail(e.target.value)} placeholder='Enter your email' />
            </div>
            <div className="sign">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder='Enter your password' onChange={(e) =>setpassword(e.target.value)} />
            </div>
            <div className="sign">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" placeholder='Confirm your password' onChange={(e)=>setconfirmpassword(e.target.value)} />
            </div>
            <button className="b"type="submit">Sign Up</button>
            <p> Already have an account? Login</p>
        </form>
    </div>
    </>
  )
}

export default Signup
