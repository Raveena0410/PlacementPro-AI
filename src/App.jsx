import { useState } from 'react'

import Nav from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Feature from './Components/Feature.jsx'
import Static from './Components/Static.jsx'
import Faq from './Components/Faq.jsx'
import Footer from './Components/Footer.jsx'
import './App.css'

function App() {
  

  return (
    <>
     <Nav/>
     <Hero/>
     <Feature/>
      <Static/>
      <Faq/>
      <Footer/>

    </>
  )
}

export default App
