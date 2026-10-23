import { useEffect } from 'react'
import './styles.css'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Work from './sections/Work'
import Journey from './sections/Journey'
import Skills from './sections/Skills'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

// Fades sections up as they scroll into view
const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function App() {
  useReveal()
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Work />
        <Journey />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
