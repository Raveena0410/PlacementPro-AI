import React from 'react'
import './Signup.css';

const Signup = () => {
    const[email,setemail]=useState();
    const[password,setpassword]=useState();
    const[confirmpassword,setconfirmpassword]=useState();
    const handle=async(e)=>{
        e.preventDefault();
        if (confirmpassword!==password){
            alert("passwords do not match");
            return;


        }
        const res=await axios.post()
    }
  return (
    <>
    <div className="main">
       <h1>PlacePrep</h1>
        <h2>
            Create Account
        </h2>
        <p>Sign up to get started</p>
         
        <form>
            <div className="sign">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder='Enter your name' />
            </div>
            <div className="sign">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder='Enter your email' />
            </div>
            <div className="sign">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder='Enter your password' />
            </div>
            <div className="sign">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" placeholder='Confirm your password' />
            </div>
            <button className="b"type="submit">Sign Up</button>
            <p> Already have an account? Login</p>
        </form>
    </div>
    </>
  )
}

export default Signup
