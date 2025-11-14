import React from 'react'
import './Skills.css'
const Frontend = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">
        {/* Frontend Developer */}
    </h3>
    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
                <i className='bx bx-badge-check'></i>
                <div>
                    <h3 className="skills__name">Flutter</h3>
                    <span className="skills__level">Advanced</span>
                </div>
            </div>
            <div className="skills__data">
                <i className='bx bx-badge-check'></i>
                <div>
                    <h3 className="skills__name">Android & IOS</h3>
                    <span className="skills__level">Advanced</span>
                </div>
            </div>
             
            <div className="skills__data">
                <i className='bx bx-badge-check'></i>
                <div>
                    <h3 className="skills__name">Dart</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div>
            <div className="skills__data">
                <i className='bx bx-badge-check'></i>
                <div>
                    <h3 className="skills__name">AWS Cloud</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div>
        </div>
        <div className="skills__group">
            <div className="skills__data">
                <i className='bx bx-badge-check'></i>
                <div>
                    <h3 className="skills__name">Git</h3>
                    <span className="skills__level">Advanced</span>
                </div>
            </div>
            <div className="skills__data">
                <i className='bx bx-badge-check'></i>
                <div>
                    <h3 className="skills__name">Github</h3>
                    <span className="skills__level">Advanced</span>
                </div>
            </div>
            <div className="skills__data">
                <i className='bx bx-badge-check'></i>
                <div>
                    <h3 className="skills__name">Java</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div>
            <div className="skills__data">
                <i className='bx bx-badge-check'></i>
                <div>
                    <h3 className="skills__name">REST Api</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default Frontend
