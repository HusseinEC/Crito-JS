import React from 'react'
import Footer from '../Footer'
import Button from '../Generics/Button'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='wrapper'>
      <main>
        <section>
        <h1>404 Page Not Found</h1>
        <p>Unable to find the page you are looking for.</p>
        <Link to="/" className='btn-yellow'>Go Back to the Beginning<i className="fa-regular fa-arrow-up-right"></i></Link>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default NotFound