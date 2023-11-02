import React from 'react'

const Features1 = ({title, description}) => {
  return (
    <div className='content'>
        <i className="fa-regular fa-handshake"></i>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default Features1