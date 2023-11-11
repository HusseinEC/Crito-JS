import React from 'react'
import { Link } from 'react-router-dom'

const WebsiteBtns = () => {
  return (
    <div>
        <Link to="/" className='home-btn'>Home</Link>
        <Link to="/news" className='contacts-btn'>News</Link>
    </div>
  )
}

export default WebsiteBtns