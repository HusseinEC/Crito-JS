import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoWhite from "../../src/Assets/Images/logotype-white.svg"
import CompanyInfo from './Generics/CompanyInfo'
import Help from './Generics/Help'
import Resources from './Generics/Resources'
import Links from './Generics/Links'
import FooterLines from "../../src/Assets/Images/footer-lines.png"

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="info">
                <div className="top-footer">
                    <div className="white-logo">
                        <img src={LogoWhite} alt=""/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                    </div>
                    <div>
                        <CompanyInfo/>
                    </div>
                    <div>
                        <Help/>
                    </div>
                    <div>
                        <Resources/>
                    </div>
                    <div>
                        <Links/>
                    </div>
                </div>
                <div className="bottom-footer">
                    <p>&copy; 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
                    <div className="social-media">
                    <li><Link to="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></Link></li>
                    <li><Link to="https://twitter.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></Link></li>
                    <li><Link to="https://instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></Link></li>
                    <li><Link to="https://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></Link></li>
                    </div>
                    <img className="footer-lines" src={FooterLines} alt=""/>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer