import React from 'react';
import './Dash.css';

const Dashboard = () => {
    return (
        <div className="dashboard">

            <aside className="sidebar">
                <h1>PlacePrep</h1>

                <div className="side-menu">
                    <p>Dashboard</p>
                    <p>ATS Checker</p>
                    <p>Resume Mistakes</p>
                    <p>Interview Questions</p>
                    <p>Resources</p>
                </div>
            </aside>

            <main className="content">

                <div className="welcome">
                    <h2>Welcome back! 👋</h2>
                    <p>Prepare smarter. Get ready for your dream placement.</p>
                </div>

                <div className="stats">

                    <div className="card">
                        <h3>Resume Score</h3>
                        <h2>78%</h2>
                        <p>Good progress</p>
                    </div>

                    <div className="card">
                        <h3>Skills</h3>
                        <h2>6/10</h2>
                        <p>Keep learning</p>
                    </div>

                    <div className="card">
                        <h3>Preparation</h3>
                        <h2>42%</h2>
                        <p>Keep going!</p>
                    </div>

                </div>

                <h2 className="section-title">Quick Actions</h2>

                <div className="actions">

                    <div className="action-card">
                        <h3>ATS Checker</h3>
                        <p>Check how well your resume performs.</p>
                        <button>Check Resume</button>
                    </div>

                    <div className="action-card">
                        <h3>Interview Questions</h3>
                        <p>Practice commonly asked interview questions.</p>
                        <button>Start Practice</button>
                    </div>

                    <div className="action-card">
                        <h3>Resume Mistakes</h3>
                        <p>Find and fix common resume mistakes.</p>
                        <button>Improve Resume</button>
                    </div>

                </div>

            </main>

        </div>
    );
};

export default Dashboard;
