import React from 'react'
import SectionTitle from '../Generics/SectionTitle'
import Article1 from '../Generics/Article1'
import Article2 from '../Generics/Article2'
import Article3 from '../Generics/Article3'
import Article4 from '../Generics/Article4'
import Article5 from '../Generics/Article5'
import Article6 from '../Generics/Article6'
import Article7 from '../Generics/Article7'
import Article8 from '../Generics/Article8'
import Article9 from '../Generics/Article9'
import NumberCarousel from '../Generics/NumberCarousel'

const OurNewsArticles = () => {
  return (
    <section class="article-news">
    <div class="container">
        <div class="sectiontitle">
            <SectionTitle title="Our News & Articles"/>
        </div>
        <div className="articles">
            <div>
                <Article1/>
            </div>
            <div>
                <Article2/>
            </div>
            <div>
                <Article3/>
            </div>
            <div>
                <Article4/>
            </div>
            <div>
                <Article5/>
            </div>
            <div>
                <Article6/>
            </div>
            <div>
                <Article7/>
            </div>
            <div>
                <Article8/>
            </div>
            <div>
                <Article9/>
            </div>
        </div>
        <div>
            <NumberCarousel/>
        </div>
    </div>
</section>
  )
}

export default OurNewsArticles