import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './Components/Navbar.jsx';
import Hero from './Components/Hero.jsx';
import Feature from './Components/Feature.jsx';
import Static from './Components/Static.jsx';
import Faq from './Components/Faq.jsx';
import Footer from './Components/Footer.jsx';
import Login from './Components/Login.jsx';
import Signup from './Components/Signup.jsx';
import Dash from './Components/Dashboard.jsx';
import Ats from './Components/Ats.jsx';


import './App.css';

function App() {
    return (
        <BrowserRouter>

            <Routes>

                {/* HOME */}
                <Route
                    path="/"
                    element={
                        <>
                            <Nav />
                            <Ats/>
                            <Hero />
                            <Feature />
                            <Static />
                            <Faq />
                            <Footer />
                        </>
                    }
                />

                {/* LOGIN */}
                <Route
                    path="/login"
                    element={<Login />}
                />

                {/* SIGNUP */}
                <Route
                    path="/signup"
                    element={<Signup />}
                />

                {/* DASHBOARD */}
                <Route
                    path="/dashboard"
                    element={<Dash />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;