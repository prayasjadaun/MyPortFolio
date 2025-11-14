import React from 'react'

const Info = () => {
  return (
    <div className='about__info grid'>
      <div className="about__box">
        <i className='bx bx-award about__icon'></i>
        <h3 className='about__title'>Experience</h3>
        <span className="about__subtitle">
          2+ years industry experience
        </span>
      </div>
      <div className="about__box">
        <i className='bx bx-briefcase-alt about__icon'></i>
        <h3 className='about__title'>Applications</h3>
        <span className="about__subtitle">
          Enterprise Applications
        </span>
      </div>
      <div className="about__box">
        <i className='bx bx-support about__icon'></i>
        <h3 className='about__title'>Platforms</h3>
        <span className="about__subtitle">
          Android & iOS
        </span>
      </div>

    </div>
  )
}

export default Info