import React from 'react'

const Features2 = ({title, description}) => {
  return (
    <div className='content'>
      <div>
        <i className="fa-regular fa-lightbulb-on"></i>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Features2