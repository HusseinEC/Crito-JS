import React from 'react'

const FeaturesBtn = ({title, url}) => {
  return (
    <a className="btn-yellow-long" href={url}> {title} <i className="fa-regular fa-arrow-up-right"></i></a>
  )
}

export default FeaturesBtn