import React from 'react'

const FeedbackForm = () => {
  return (
    <form className="feedback-form" method="post">
        <div className="name">
            <input className="form-input" type="text" tabindex="1" id="firstName" name="firstName" placeholder="Name*"></input>
        </div>
        <div className="email">
            <input className="form-input" type="email" tabindex="3" id="email" name="email" placeholder="Email*"></input>
        </div>
        <div className="text">
            <textarea className="form-input" name="text" id="text" placeholder="Your Feedback*"></textarea>
        </div>
    </form>
  )
}

export default FeedbackForm