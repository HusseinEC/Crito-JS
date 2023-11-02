import Button from "../Generics/Button"
import "./Showcase.css"
import React from 'react'
import Img_backgroundlines from "../../Assets/Images/background-lines.svg"
import Img_showcase from "../../Assets/Images/showcase-image.svg"

function ShowcaseSection() {
  return (
    <section className="showcase">
        <img className="background-lines" src={Img_backgroundlines} alt=""/>
        <div className="container">
            <div className="content">
                <h1>We Provide The Best Business Solutions</h1>
                <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                <Button text="Get Consulting" url="/services/get-consulting"/>
                <Button text="Learn More" url="/services/get-consulting"/>
            </div>
            <img src={Img_showcase} alt=""/>
        </div>
    </section>
  )
}

export default ShowcaseSection