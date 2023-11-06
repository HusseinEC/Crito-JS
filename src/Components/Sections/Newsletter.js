import React from 'react'
import WavyLines from "../../Assets/Images/background-wavy-lines.svg"

const Newsletter = () => {
  return (
    <section className="Newsletter">
        <img className="background-wavy-right" src={WavyLines} alt=""/>
        <div className="container">
            <h2>Get News Updates By Signup</h2>
            <form>
                <input type="text" placeholder="username@domain.com"></input>
                <button className="btn-yellow">Subscribe <i className="fa-regular fa-arrow-up-right"></i></button>
            </form>
        </div>
    </section>
  )
}

export default Newsletter