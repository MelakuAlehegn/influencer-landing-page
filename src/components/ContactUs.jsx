import React from 'react'
import Footer from './Footer'

function ContactUs() {
  return (
    <div className='contactus-page'>
      <div className='about-bottom'>
        <div className='bottom-left'>
          <Link to='/about' className='big-link'>ABOUT US</Link>
          <Link to='/contact' className='small-links'>CONTACT US</Link>
          <a href='#' className='small-links'>USER SUPPORT</a>
          <a href='#' className='small-links'>FAQ</a>
        </div>
        <hr className='horizontall'></hr>
        <div className='bottom-right'>
          <a href='#' className='middle-link'>BLOG POSTS</a>
          <a href='#' className='follow-us'>FOLLOW US</a>
          <div className='icons'>
            <a href="https://www.facebook.com" className='footer-icons'><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.twitter.com" className='footer-icons'><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com" className='footer-icons'><i className="fab fa-instagram"></i></a>
            <a href="https://www.pinterest.com" className='footer-icons'><i className="fab fa-pinterest"></i></a>
            <a href="https://www.youtube.com" className='footer-icons'><i className="fab fa-youtube"></i></a>
            <a href="https://www.linkedin.com/" className='footer-icons'><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ContactUs