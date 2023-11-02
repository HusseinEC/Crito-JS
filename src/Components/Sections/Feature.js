import React from 'react'
import SectionTitle from '../Generics/SectionTitle'
import FeaturesBtn from '../Generics/FeaturesBtn'
import Features1 from '../Generics/Features1'
import Features2 from '../Generics/Features2'
import Features3 from '../Generics/Features3'
import Features4 from '../Generics/Features4'

const Feature = () => {
  return (
    <div>
      <section className="features">
        <div className="container">
            <div className="section-title2">
            <SectionTitle title="Features" description="Our Accounting is trusted by thousand of companies"/>
            <FeaturesBtn title="Learn More" url="/services"/>
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