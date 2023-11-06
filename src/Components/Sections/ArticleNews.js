import React from 'react'
import SectionTitle from '../Generics/SectionTitle'
import { Link } from 'react-router-dom'
import Article1 from '../Generics/Article1'
import Article2 from '../Generics/Article2'
import Article3 from '../Generics/Article3'
import Carousel from '../Generics/Carousel'

const ArticleNews = () => {
  return (
    <section class="article-news">
    <div class="container">
        <div class="section-title">
            <SectionTitle title="Article & News" description="Get Every Single Articles & News"/>
        </div>
        <div class="article-btn">
            <Link to="/news" className='btn-transparent'>Browse Article<i class="fa-regular fa-arrow-up-right"></i></Link>
        </div>
        <div class="articles">
            <div>
                <Article1/>
            </div>
            <div>
                <Article2/>
            </div>
            <div>
                <Article3/>
            </div>
        </div>
        <div>
            <Carousel/>
        </div>
    </div>
</section>
  )
}

export default ArticleNews