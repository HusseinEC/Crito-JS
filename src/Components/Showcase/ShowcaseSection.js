import "./Showcase.css"
import React from 'react'
import Img_backgroundlines from "../../Assets/Images/background-lines.svg"
import Img_showcase from "../../Assets/Images/showcase-image.svg"
import { Link } from "react-router-dom"

function ShowcaseSection() {
  return (
    <section className="showcase">
        <img className="background-lines" src={Img_backgroundlines} alt=""/>
        <div className="container">
            <div className="content">
                <h1>We Provide The Best Business Solutions</h1>
                <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                <Link to="/services/get-consulting" className="btn-yellow">Get Consulting<i className="fa-regular fa-arrow-up-right"></i></Link>
                <Link to="/services/get-consulting" className="btn-transparent">Learn More<i className="fa-regular fa-arrow-up-right"></i></Link>
            </div>
            <img src={Img_showcase} alt=""/>
        </div>
    </section>
  )
}

export default ShowcaseSection