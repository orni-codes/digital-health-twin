import React, { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Features from "./components/Features"
import Howtouse from "./components/Howtouse"
import FadeIn from "./components/FadeIn"
import Footer from "./components/Footer"
import FAQ from "./components/FAQ"

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  return (
    <>
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero/>
      <Services/>
       <FadeIn>
        <Features/>
        </FadeIn>
      <Howtouse/>
      <FAQ/>
      <Footer/>
    </div>
    
    </>
  )
}

export default App