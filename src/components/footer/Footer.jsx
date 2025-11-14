import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
   <footer className='footer'>
        <div className="footer__container container">
            <h1 className="footer__title">Prayas Jadaun</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                 <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#industry" className="footer__link">Industry</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </ul>

            <div className="footer__social">
             <a href="https://www.instagram.com/_thakurprayas/profilecard/?igsh=MTRyOXIwOW9hb2Zxcg%3D%3D" className="footer__social-link" target='_blank'>
                <i className='bx bxl-instagram'></i>
                </a>
                <a href="https://github.com/prayasjadaun" className="footer__social-link" target='_blank'>
                <i className='bx bxl-github'></i>
                </a>
                <a href="https://www.linkedin.com/feed/" className="footer__social-link" target='_blank'>
                <i className='bx bxl-linkedin'></i>
                </a>
            </div>
            <span className="footer__copy">&#169; 
            Prayas. All rights reserved.
            </span>
        </div>
   </footer>
  )
}

export default Footer