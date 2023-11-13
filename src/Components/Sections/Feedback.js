import React from 'react'
import FeedbackForm from '../Generics/FeedbackForm'

const Feedback = () => {
  return (
<section className="feedback">
    <div className="container">
        <div>
            <h1>Leave us a message for any information.</h1>
        </div>
        <FeedbackForm/>
    </div>
</section>
  )
}

export default Feedback