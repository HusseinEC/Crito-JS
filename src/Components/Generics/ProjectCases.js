import React from 'react'
import BusinessArticle from '../../Assets/Images/Business article.png'
import iPadArticle from '../../Assets/Images/iPad article.png'
import NotesArticle from '../../Assets/Images/Notes article.png'
import LaptopArticle from '../../Assets/Images/Laptop article.png'
import { Link } from 'react-router-dom'

const ProjectCases = () => {
  return (
    <div class="project-and-cases">
        <Link to="#" className='project'>
            <img src={BusinessArticle} alt="article image 1"/>
            <h3>Grow your business</h3>
            <div class="readmore">Read More <i class="fa-regular fa-arrow-up-right"></i></div>
        </Link>
        <Link to="#" className='project'>
            <img src={iPadArticle} alt="article image 2"/>
            <h3>Why your clients need a responsive webstie</h3>
            <div class="readmore">Read More <i class="fa-regular fa-arrow-up-right"></i></div>
        </Link>
        <Link to="#" className='project'>
            <img src={NotesArticle} alt="article image 3"/>
            <h3>Educate your employees to get better results</h3>
            <div class="readmore">Read More <i class="fa-regular fa-arrow-up-right"></i></div>
        </Link>
        <Link to="#" className='project'>
            <img src={LaptopArticle} alt="article image 4"/>
            <h3>Business Insights is a  important piece of your business</h3>
            <div class="readmore">Read More <i class="fa-regular fa-arrow-up-right"></i></div>
        </Link>
    </div>
  )
}

export default ProjectCases