import React from 'react'
import Works from './Works'
import './Work.css'
const Work = () => {
  return (
    <section className="work section" id='projects'>
        <h2 className="section__title">Projects</h2>
        <span section__subtitle>most recent works</span>
        <Works />
    </section>
  )
}

export default Work
