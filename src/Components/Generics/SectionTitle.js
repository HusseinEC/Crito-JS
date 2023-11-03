import React from 'react'

const SectionTitle = ({title, description}) => {
  return (
    <div>
        <div className='section-title'>{title}</div>
        <h2>{description}</h2>
    </div>
  )
}

export default SectionTitle