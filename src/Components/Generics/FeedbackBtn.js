import React from 'react'
import { Link } from 'react-router-dom'

const FeedbackBtn = () => {
  return (
    <div className="feedback-btn">
        <Link to="/contacts" className="btn-yellow-long">Send Message <i className="fa-regular fa-arrow-up-right"></i></Link>
    </div>
  )
}

export default FeedbackBtn