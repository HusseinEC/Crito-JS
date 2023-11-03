import React from 'react'

const CompanyBtns = () => {
  return (
    <div>
        <div className="btns">
            <div>
                <a className="btn-black" href="/services/get-consulting">Learn More<i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
            <div className="intro-video">
                <a href="video"><i className="fa-solid fa-play"></i></a>
            </div>
        </div>
        <div className="intro-video-text">
            <p>Intro Video</p>
        </div>
    </div>
  )
}

export default CompanyBtns