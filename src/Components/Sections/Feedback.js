import React from 'react'
import FeedbackForm from '../Generics/FeedbackForm'
import FeedbackBtn from '../Generics/FeedbackBtn'

const Feedback = () => {
  return (
<section className="feedback">
    <div className="container">
        <div>
            <h1>Leave us a message for any information.</h1>
        </div>
        <FeedbackForm/>
        <div>
            <FeedbackBtn/>
        </div>
    </div>
</section>
  )
}

export default Feedback