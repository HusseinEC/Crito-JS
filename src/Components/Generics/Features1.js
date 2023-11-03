import React from 'react'

const Features1 = ({title, description}) => {
  return (
    <div className='content'>
        <div>
        <i className="fa-regular fa-handshake"></i>
        <h3>{title}</h3>
        <p>{description}</p>
        </div>
    </div>
  )
}

export default Features1