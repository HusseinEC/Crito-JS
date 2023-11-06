import React from 'react'
import SectionTitle from '../Generics/SectionTitle'
import Img_backgroundlinesright from '../../Assets/Images/background-lines-right.svg'
import { Link } from 'react-router-dom'
import Services1 from '../Generics/Services1'
import Services2 from '../Generics/Services2'
import Services3 from '../Generics/Services3'
import Services4 from '../Generics/Services4'

const OurServices = () => {
  return (
    <div>
    <section className="our-services">
        <div className="container">
            <SectionTitle title="Our Services" description="We Provide The Best Service For Consulting"/>
            <div className="service">
                <Services1 title="Business Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."></Services1>
                <Services2 title="Startup Business" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."></Services2>
                <Services3 title="Financial Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."></Services3>
                <Services4 title="Risk Management" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."></Services4>
            </div>
            <div>
                <Link to="/services" className="browse-services">Browse Services<i className="fa-regular fa-arrow-up-right"></i></Link>
            </div>
            <div className="background-lines-right">
                <img src={Img_backgroundlinesright} alt=""/>
            </div>
        </div>
    </section>
</div>
  )
}

export default OurServices