import React from 'react'
import Services from '../Generics/Services'
import SectionTitle from '../Generics/SectionTitle'
import ServicesBtn from '../Generics/ServicesBtn'
import Img_backgroundlinesright from '../../Assets/Images/background-lines-right.svg'

const OurServices = () => {
  return (
    <div>
    <section className="our-services">
        <div className="container">
            <SectionTitle title="Our Services" description="We Provide The Best Service For Consulting"/>
            <div className="service">
                <Services title="Business Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/businessadvice"/>
                <Services title="Startup Business" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/startupbusiness"/>
                <Services title="Financial Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/financialadvice"/>
                <Services title="Risk Management" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/riskmanagement"/>
            </div>
            <div>
                <ServicesBtn title="Browse Services" url="/services"/>
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