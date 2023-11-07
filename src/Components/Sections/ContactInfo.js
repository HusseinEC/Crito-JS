import React from 'react'
import VisitUs from '../Generics/VisitUs'
import CallUs from '../Generics/CallUs'
import EmailUs from '../Generics/EmailUs'

const ContactInfo = () => {
  return (
    <div>
    <section className="contact-info">
        <div className="container">
            <div className="contact-desc">
                <div>
                    <VisitUs/>
                </div>
                <div>
                    <CallUs/>
                </div>
                <div>
                    <EmailUs/>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default ContactInfo