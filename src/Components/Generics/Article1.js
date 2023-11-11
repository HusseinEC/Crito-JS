import React from 'react'
import article1 from "../../Assets/Images/Article 1.png"
import { Link } from 'react-router-dom'

const Article1 = () => {
  return (
    <div>
      <Link to="/news_details">
        <img src={article1} alt=""/>
        <h3>Business</h3>
        <h2>How To Use Digitalization In The classroom</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
        <div className="date">
            25 Mars
        </div>
        </Link>
    </div>
  )
}

export default Article1