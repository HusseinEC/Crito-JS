import "./Nav.css"
import React from 'react'
import Img_logotype from "../../Assets/Images/Crito.svg"
import { Link, NavLink } from 'react-router-dom'

const NavSection = () => {
  return (
    <section className="nav">
    <div className="container">
        <Link to="/"><img className="logotype" src={Img_logotype} alt=""/></Link>
        <div className="menu">
            <div className="top-menu">
                <div className="contact-information">
                    <div className="content-box">
                        <i className="fa-regular fa-phone-volume"></i>
                        +46 (8) 121 470 50
                    </div>
                    <div className="content-box">
                        <i className="fa-regular fa-envelope"></i>
                        info@crito.com
                    </div>
                    <div className="content-box last">
                        <i className="fa-regular fa-location-dot"></i>
                        Sveavägen 31, 111 34 STOCKHOLM
                    </div>
                </div>
                <div className="social-media">
                    <li><Link to="https://facebook.com/" target="_blank"><i class="fa-brands fa-facebook"></i></Link></li>
                    <li><Link to="https://twitter.com/" target="_blank"><i class="fa-brands fa-x-twitter"></i></Link></li>
                    <li><Link to="https://instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></Link></li>
                    <li><Link to="https://linkedin.com/" target="_blank"><i class="fa-brands fa-linkedin"></i></Link></li>
                </div>
            </div>
            <div className="main-menu">
                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="/news">News</NavLink></li>
                        <li><NavLink to="/contacts">Contacts</NavLink></li>
                    </ul>
                </nav>
                <Link to="/login" className="btn-yellow">Login<i className="fa-regular fa-arrow-up-right"></i></Link>
            </div>
        </div>
    </div>
</section>
  )
}

export default NavSection