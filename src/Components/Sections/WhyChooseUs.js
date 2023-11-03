import React from 'react'
import SectionTitle from '../Generics/SectionTitle'
import Topic1 from '../Generics/Topic1'
import Topic2 from '../Generics/Topic2'
import Topic3 from '../Generics/Topic3'
import Topic4 from '../Generics/Topic4'
import Why from '../../Assets/Images/Why.png'


const WhyChooseUs = () => {
  return (
    <div>
        <section className="why-choose-us">
        <div className="container">
            <div className="explanation">
                <div className='section-title'>
                    <SectionTitle title="Why Choose Us" description="Why We Are The Best Business Consulting Agency"/>
                </div>
                <div>
                    <Topic1/>
                </div>
                <div>
                    <Topic2/>
                </div>
                <div>
                    <Topic3/>
                </div>
                <div>
                    <Topic4/>
                </div>
            </div>
            <div>
             <img src={Why} alt=""/>
            </div>
            <div className="why-box"></div>
        </div>
    </section>
    </div>
  )
}

export default WhyChooseUs