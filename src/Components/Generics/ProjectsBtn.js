import React from 'react'
import { Link } from 'react-router-dom'

const ProjectsBtn = () => {
  return (
    <div className="center-content">
        <Link to="/services/get-consulting" className="btn-black">All Recent Projects <i className="fa-regular fa-arrow-up-right"></i></Link>
    </div>
  )
}

export default ProjectsBtn