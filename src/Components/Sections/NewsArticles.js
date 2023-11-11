import React from 'react'
import WebsiteBtns2 from '../Generics/WebsiteBtns2'
import BackgroundLines from "../../Assets/Images/background-lines.svg"

const LetsConnect = () => {
  return (
    <div>
    <section className="showcase-contacts">
        <div className="container">
            <div className="website-btns">
                <WebsiteBtns2/>
            </div>
            <div>
                <h1>News & Articles</h1>
            </div>
        </div>
        <img className="background-lines" src={BackgroundLines} alt=""/>
    </section>
    </div>
  )
}

export default LetsConnect