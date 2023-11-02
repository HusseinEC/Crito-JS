import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer'
import Feature from '../Sections/Feature'
import OurServices from '../Sections/OurServices'
import Member from '../Sections/Member'
import Logos from '../Sections/Logos'

const Home = () => {
  return (
    <div className='wrapper'>
      <Header/>
      <main>
        <Logos/>
        <Feature/>
        <OurServices/>
        <Member/>
      </main>
      <Footer/>
    </div>
  )
}

export default Home