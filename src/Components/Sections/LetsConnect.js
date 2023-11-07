import React from 'react'
import WebsiteBtns from '../Generics/WebsiteBtns'
import BackgroundLines from "../../Assets/Images/background-lines.svg"

const LetsConnect = () => {
  return (
    <div>
    <section className="showcase-contacts">
        <div className="container">
            <div className="website-btns">
                <WebsiteBtns/>
            </div>
            <div>
                <h1>Let's Connect</h1>
            </div>
        </div>
        <img className="background-lines" src={BackgroundLines} alt=""/>
    </section>
    </div>
  )
}

export default LetsConnect