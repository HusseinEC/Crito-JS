import React from 'react'
import { Link } from 'react-router-dom'

const CompanyBtns = () => {
  return (
    <div>
        <div className="btns">
            <div>
                <Link to="/services/get-consulting" className='btn-black'>Learn More<i className="fa-regular fa-arrow-up-right"></i></Link>
            </div>
            <div className="intro-video">
                <Link to="video"><i className="fa-solid fa-play"></i></Link>
            </div>
        </div>
        <div className="intro-video-text">
            <p>Intro Video</p>
        </div>
    </div>
  )
}

export default CompanyBtns