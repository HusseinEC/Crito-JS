import './Header.css'
import React, { useState } from 'react'
import NavSection from '../Nav/NavSection'
import ShowcaseSection from '../Showcase/ShowcaseSection'
import { NavLink } from 'react-router-dom'


const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [btnClasses, setBtnClasses] = useState("btn-menu")

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setBtnClasses(!showMenu ? 'btn-menu active' : "btn-menu")
  }

  return (
    <header>
      <div className='container'>
        {showMenu&& (
          <nav>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/news">News</NavLink></li>
              <li><NavLink to="/contacts">Contacts</NavLink></li>
            </ul>
          </nav>
        )}
      </div>
      <NavSection/>
      <ShowcaseSection/>
    </header>
  )
}

export default Header