import React from 'react'
import Founder from '../../Assets/Images/Founder.png'
import WavyLines from '../../Assets/Images/background-wavy-lines.svg'
import FounderName from '../Generics/FounderName'
import LoremShort from '../Generics/LoremShort'
import SectionTitle from '../Generics/SectionTitle'
import LoremLong from '../Generics/LoremLong'
import CompanyBtns from '../Generics/CompanyBtns'

const AboutCompany = () => {
  return (
    <div>
        <section className="company">
        <div className="container">
            <div className="founder">
                <img src={Founder} alt=""/>
                <img className="wavy-lines" src={WavyLines} alt=""/>
                <div>
                    <FounderName/>
                </div>
                <LoremShort/>
                <div className="founder-box"></div>
            </div>
            <div className="content">
                <div className="section-title3">
                    <SectionTitle title="About Company" description="We Are Business Consulting & Credit Repair Experts"/>
                </div>
                <div>
                    <LoremLong/>
                </div>
                <div>
                    <CompanyBtns/>
                </div>
            </div>
        </div>
    </section>
</div>
  )
}

export default AboutCompany