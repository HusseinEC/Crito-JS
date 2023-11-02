import "./Nav.css"
import React from 'react'
import Img_logotype from "../../Assets/Images/Crito.svg"
import Button from "../Generics/Button"
import btnClasses from "../Header/Header"
import toggleMenu from "../Header/Header"
import { Link, NavLink } from 'react-router-dom'

const NavSection = () => {
  return (
    <section className="nav">
    <div className="container">
        <Link to="/"><img className="logotype" src={Img_logotype} alt=""/></Link>
        <button className={btnClasses} onClick={toggleMenu} className="menu-bars"><i className="fa-solid fa-bars-staggered"></i></button>
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
                    <a href="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="https://instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
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
                <Button text="Login" url="/login"/>
            </div>
        </div>
    </div>
</section>
  )
}

export default NavSection