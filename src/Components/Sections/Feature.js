import React from 'react'
import SectionTitle from '../Generics/SectionTitle'
import Features1 from '../Generics/Features1'
import Features2 from '../Generics/Features2'
import Features3 from '../Generics/Features3'
import Features4 from '../Generics/Features4'
import { Link } from 'react-router-dom'

const Feature = () => {
  return (
    <div>
      <section className="features">
        <div className="container">
            <div className="section-title2">
            <SectionTitle title="Features" description="Our Accounting is trusted by thousand of companies"/>
            <Link to="/services" className='btn-yellow-long'>Learn More<i className="fa-regular fa-arrow-up-right"></i></Link>
            </div>
            <div className="content">
                <div>
                  <Features1 title="Business Advice" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
                </div>
                <div>
                    <Features2 title="Startup Business" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
                </div>
                <div>
                    <Features3 title="Financial Advice" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
                </div>
                <div>
                    <Features4 title="Risk Management" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Feature