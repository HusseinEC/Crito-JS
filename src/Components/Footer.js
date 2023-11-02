import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <section className='container'>
        <div class="bottom-footer">
          <p>&copy; 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
          <div class="social-media">
              <li><Link to="https://facebook.com/" target="_blank"><i class="fa-brands fa-facebook"></i></Link></li>
              <li><Link to="https://twitter.com/" target="_blank"><i class="fa-brands fa-x-twitter"></i></Link></li>
              <li><Link to="https://instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></Link></li>
              <li><Link to="https://linkedin.com/" target="_blank"><i class="fa-brands fa-linkedin"></i></Link></li>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer