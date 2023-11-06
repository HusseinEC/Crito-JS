import React from 'react'
import { Link } from 'react-router-dom'

const Services1 = ({title, description}) => {
  return (
    <div className="panels">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="show-more">
      <Link to="/services/businessadvice" className="show-more"><i className="fa-regular fa-arrow-right"></i></Link>
      </div>
  </div>
  )
}

export default Services1