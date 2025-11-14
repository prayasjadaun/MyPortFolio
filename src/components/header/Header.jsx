import React, { useState } from 'react'
import './header.css'
const Header = () => {
    
    const [Toggle,showToggle]=useState(false);
  return (
    <div className="header">
        <nav className="nav container">
            <a href="index.html" className='nav-logo'>Prayas Jadaun</a>

            <div className={Toggle ? "nav-menu show-menu" :
            "nav-menu"} >
             
                <ul className="nav-list grid">
                    <li className="nav-item">
                        <a href="#home" className='nav-link active-link'>
                            <i className="uil uil-estate nav__icon"></i> Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className='nav-link'>
                            <i className="uil uil-user nav__icon"></i>About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#skills" className='nav-link'>
                            <i className="uil uil-file-alt nav__icon"></i> Skills
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#portfolio" className='nav-link'>
                            <i className="uil uil-scenery nav__icon"></i>Portfolio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className='nav-link'>
                            <i className="uil uil-message nav__icon"></i>Contact
                        </a>
                    </li>
                </ul>
                <i className='uil uil-times nav__close' onClick={()=> showToggle(!Toggle)}></i>
            </div>
            <div className="nav__toggle" onClick={()=> showToggle(!Toggle)}>
                <i className='uil uil-apps'></i>
            </div>
        </nav>
    </div>
  )
}

export default Header
