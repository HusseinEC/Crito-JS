import React from 'react'
import Header from '../Header/Header'
import NewsArticles from '../Sections/NewsArticles'
import ArticleNews from '../Sections/ArticleNews'
import Footer from '../Footer'

const NewsDetails = () => {
  return (
    <div className='wrapper'>
      <Header/>
      <NewsArticles/>
      <ArticleNews/>
      <Footer/>
    </div>
  )
}

export default NewsDetails