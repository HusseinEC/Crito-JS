import React from 'react'

const ServicesBtn = ({title, url}) => {
  return (
    <a className="browse-services" href={url}> {title} <i className="fa-regular fa-arrow-up-right"></i></a>
  )
}

export default ServicesBtn