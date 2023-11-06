import './Header.css'
import React, { useState } from 'react'
import NavSection from '../Nav/NavSection'
import ShowcaseSection from '../Showcase/ShowcaseSection'


const Header = () => {

  return (
    <header>
      <NavSection/>
      <ShowcaseSection/>
    </header>
  )
}

export default Header