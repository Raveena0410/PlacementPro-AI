import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className="con">
      <div className="l">
        <h2>Free AI Platform for Students</h2>

        <h1>Crack Your Dream Placement with AI</h1>

        <p>
          Improve your resume, check ATS score, practice interviews,
          solve DSA, and prepare for internships—all in one place.
        </p>

        <div className="btns">
          <button className="p">Get Started</button>
          <button className="outline">Learn More</button>
        </div>
      </div>

      <div className="r">
  <div className="dashboard">
    <h3>AI Placement Dashboard</h3>

    <div className="card">
      <span>📄 ATS Score</span>
      <h2>92%</h2>
    </div>

    <div className="card">
      <span>💻 DSA Progress</span>
      <h2>180 / 300</h2>
    </div>

    <div className="card">
      <span>🎯 Interview Ready</span>
      <h2>85%</h2>
    </div>

    <div className="card">
      <span>🤖 AI Assistant</span>
      <p>Online</p>
    </div>
  </div>
</div>
    </div>
  )
}

export default Hero