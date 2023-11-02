import React from 'react'

const SectionTitle = ({title, description}) => {
  return (
    <>
        <div className='section-title'>{title}</div>
        <h2>{description}</h2>
    </>
  )
}

export default SectionTitle