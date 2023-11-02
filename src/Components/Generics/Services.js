import React from 'react'

const ServiceBox = ({title, description, url}) => {
  return (
    <div className="panels">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="show-more">
          <a href={url}><i className="fa-regular fa-arrow-right"></i></a>
      </div>
  </div>
  )
}

export default ServiceBox