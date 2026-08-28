import React from "react";
import "./Dash.css";

import { Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("name");
        navigate("/login");
    };

    return (
        <div className="d">

            {/* SIDEBAR */}
            <aside className="sidebar">

                <h1>PlacePrep</h1>

                <div className="side-menu">

                    <p onClick={() => navigate("/dashboard")}>
                        Dashboard
                    </p>

                    <p onClick={() => navigate("/dashboard/ATS")}>
                        ATS Checker
                    </p>

                    <p>
                        Resume Mistakes
                    </p>

                    <p>
                        Interview Questions
                    </p>

                    <p>
                        Resources
                    </p>

                    <button
                        className="logout-btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>

                </div>

            </aside>


            {/* BIG CONTENT AREA */}
            <main className="content">

                <Outlet />

            </main>

        </div>
    );
};

export default Dashboard;