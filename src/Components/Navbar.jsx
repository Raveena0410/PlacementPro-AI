import React from 'react'
import '../App.css'

const Navbar = () => {
  return (
    <div className="cont">
      <div className="logo">
        <div className="cont1">
          <span className="logo-icon">🎓</span>
        <h3>PlacementAI</h3>
      </div>
      </div>
      <div className="link">
        <ul className="links">
          <li>Home</li>
          <li>Features</li>
          <li>Resources</li>
          <li>About</li>
        </ul>

      
    

      </div>
    <div className="log">
      <button className="bt">Login</button>
      <button className="btm">Signup</button>
    </div>

      


    </div>
  )
}

export default Navbar



