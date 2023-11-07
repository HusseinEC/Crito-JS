import React from 'react'
import Header from '../Header/Header'
import ShowcaseSection from '../Showcase/ShowcaseSection'
import Footer from '../Footer'
import Feature from '../Sections/Feature'
import OurServices from '../Sections/OurServices'
import Logos from '../Sections/Logos'
import AboutCompany from '../Sections/AboutCompany'
import WhyChooseUs from '../Sections/WhyChooseUs'
import ProjectCaseStudies from '../Sections/ProjectCaseStudies'
import MeetOurTeam from '../Sections/MeetOurTeam'
import ArticleNews from '../Sections/ArticleNews'
import Newsletter from '../Sections/Newsletter'

const Home = () => {
  return (
    <div className='wrapper'>
      <Header/>
      <ShowcaseSection/>
      <main>
        <Logos/>
        <Feature/>
        <AboutCompany/>
        <OurServices/>
        <WhyChooseUs/>
        <ProjectCaseStudies/>
        <MeetOurTeam/>
        <ArticleNews/>
        <Newsletter/>
      </main>
      <Footer/>
    </div>
  )
}

export default Home