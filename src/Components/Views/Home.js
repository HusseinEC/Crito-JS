import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer'
import Feature from '../Sections/Feature'
import OurServices from '../Sections/OurServices'
import Member from '../Sections/Member'
import Logos from '../Sections/Logos'
import AboutCompany from '../Sections/AboutCompany'
import WhyChooseUs from '../Sections/WhyChooseUs'
import ProjectCaseStudies from '../Sections/ProjectCaseStudies'

const Home = () => {
  return (
    <div className='wrapper'>
      <Header/>
      <main>
        <Logos/>
        <Feature/>
        <AboutCompany/>
        <OurServices/>
        <WhyChooseUs/>
        <ProjectCaseStudies/>
        <Member/>
      </main>
      <Footer/>
    </div>
  )
}

export default Home