import React from 'react'
import './Feature.css'

const Feature = () => {
  return (
    <section className="feature">

      <h2>Powerful Features</h2>

      <p className="sub">
        Everything You Need to Crack Placements
      </p>

      <div className="feature-grid">

        <div className="card">
          <div className="icon">📄</div>
          <h3>ATS Resume Checker</h3>
          <p>
            Upload your resume and get instant ATS score with AI suggestions.
          </p>
        </div>

        <div className="card">
          <div className="icon">🤖</div>
          <h3>AI Career Assistant</h3>
          <p>
            Ask career and coding questions anytime with AI guidance.
          </p>
        </div>

        <div className="card">
          <div className="icon">💻</div>
          <h3>DSA Practice</h3>
          <p>
            Solve coding problems and track your preparation progress.
          </p>
        </div>

        <div className="card">
          <div className="icon">🎤</div>
          <h3>Mock Interviews</h3>
          <p>
            Practice technical and HR interviews with AI feedback.
          </p>
        </div>

        <div className="card">
          <div className="icon">📚</div>
          <h3>Learning Roadmap</h3>
          <p>
            Get a personalized roadmap for placements and internships.
          </p>
        </div>

        <div className="card">
          <div className="icon">📊</div>
          <h3>Placement Analytics</h3>
          <p>
            Monitor your ATS score, interview readiness, and overall progress.
          </p>
        </div>

      </div>

    </section>
  )
}

export default Feature