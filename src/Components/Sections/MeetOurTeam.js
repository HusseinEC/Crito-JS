import React from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from '../Generics/SectionTitle'
import Member1 from '../Generics/Member1'
import Member2 from '../Generics/Member2'
import Member3 from '../Generics/Member3'
import Member4 from '../Generics/Member4'
import Carousel from '../Generics/Carousel'
import Stars from '../Generics/Stars'
import Review1 from '../Generics/Review1'
import Review2 from '../Generics/Review2'
import Review3 from '../Generics/Review3'

const MeetOurTeam = () => {
  return (
    <section className="meet-our-team">
        <div className="container">
            <div className='section-title'>
                <SectionTitle title="Meet Our Team" description="Experience Team Members"/>
            </div>
            <div className="team-btn">
                <Link to="/team" className="btn-transparent">Browse Team<i className="fa-regular fa-arrow-up-right"></i></Link>
            </div>
            <div className="members">
                <div>
                    <Member1/>
                </div>
                <div>
                    <Member2/>
                </div>
                <div>
                    <Member3/>
                </div>
                <div>
                    <Member4/>
                </div>
            </div>
            <div>
                <Carousel/>
            </div>
            <div className="Testimonial">
                <div className="section-title">
                    <SectionTitle title="Testimonial" description="What Our Client Says"/>
                </div>
                <div className="reviews">
                    <div>
                        <div>
                            <Stars/>
                        </div>
                        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                        <div>
                            <Review1/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Stars/>
                        </div>
                        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                        <div>
                            <Review2/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Stars/>
                        </div>
                        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                        <div>
                            <Review3/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="all-reviews-btn">
                <Link to="/reviews" className="btn-black">All Reviews<i className="fa-regular fa-arrow-up-right"></i></Link>
            </div>
        </div>
    </section>
  )
}

export default MeetOurTeam