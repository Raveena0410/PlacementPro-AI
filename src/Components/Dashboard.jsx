import React from 'react'
import "./Dash.css";

const Dashboard = () => {
  return (
    <>
    <div className="dash">
    <h1>DASHBOARD</h1>
    <div className="das">
        <div className="das1">
            <h2> Sidebar  </h2>
            <ul className="side">
              <li> ATS Checker </li>
              <li>Resume Mistakes</li>
              <li>Interview Questions</li>
              <li> Resources </li>
            </ul>
            
        </div>
        <div className="das2">
            <h2> Main Content </h2>

        </div>

    </div>
    </div>

    </>
  )
}

export default Dashboard
