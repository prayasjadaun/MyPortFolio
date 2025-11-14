import React from 'react'
import './App.css'
import Home from './components/home/Home'
import Header from './components/header/Header'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Qualification from './components/Qualification/Qualification'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ScrollUp from './components/scroll/ScrollUp'
import Work from './components/work/Work'
function App() {
  return ( 
    <>
      <Header />
      <div className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Work />
        <Testimonials />
        <Contact />
        <Footer />
        <ScrollUp />
      </div>
    </>
  )
}

export default App
