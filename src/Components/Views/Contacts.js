import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer'
import LetsConnect from '../Sections/LetsConnect'
import ContactInfo from '../Sections/ContactInfo'
import Feedback from '../Sections/Feedback'
import Map from '../Sections/Map'

const Contacts = () => {
  return (
    <div className='wrapper'>
      <Header/>
      <main>
        <LetsConnect/>
        <ContactInfo/>
        <Feedback/>
        <Map/>
      </main>
      <Footer/>
    </div>
  )
}

export default Contacts