import React from 'react'
import Header from '../Header/Header'
import NewsArticles from '../Sections/NewsArticles'
import OurNewsArticles from '../Sections/OurNewsArticles'
import Newsletter from '../Sections/Newsletter'
import Footer from '../Footer'

const News = () => {
  return (
    <div className='wrapper'>
      <Header/>
      <NewsArticles/>
      <OurNewsArticles/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default News