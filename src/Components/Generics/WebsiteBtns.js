import React from 'react'
import { Link } from 'react-router-dom'

const WebsiteBtns = () => {
  return (
    <div>
        <Link to="/" className='home-btn'>Home</Link>
        <Link to="/contacts" className='contacts-btn'>Contact</Link>
    </div>
  )
}

export default WebsiteBtns