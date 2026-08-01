import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <>
    <div className="f">
        <div className="f1">
            <h4>PlacePrep</h4>
            <ul className="lu">
            
            <li>Helping students</li>
            <li>prepare smarter for</li>
            <li>internships and </li>
            <li>placements.</li>

            </ul>
        </div>
        <div className="f2">
    <h4>Quick Links</h4>
    <ul>
        <li>Home</li>
        <li>Features</li>
        <li>How It Works</li>
        <li>FAQ</li>
    </ul>
</div>
        <div className="f3">
    <h4>Our Tools</h4>
    <ul>
        <li>Resume Analyzer</li>
        <li>DSA Practice</li>
        <li>Interview Prep</li>
        <li>Learning Resources</li>
    </ul>
</div>
    </div>
<div className="f4">
    <p>© 2026 PlacePrep. All rights reserved.</p>
</div>
    </>
  )
}

export default Footer