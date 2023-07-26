import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFax } from 'react-icons/fa';

function ContactUs() {
  return (
    <div className='cc'>
      <div className='contactus-page'>
        <div className='para'>
          <div className="contact-top">
            <div className="contact-red">
              <h3>Contact Us</h3>
              <div className='new'>
                <div>
                  <FaMapMarkerAlt />
                  <p>32, Avenue ve Newyork</p>
                </div>
                <div>
                  <FaEnvelope />
                  <p>hello@loremipsum.com</p>
                </div>
                <div>
                  <FaPhone />
                  <p>+3356 1589 2105</p>
                </div>
                <div>
                  <FaFax />
                  <p>+3356 1589 2105</p>
                </div>
              </div>
            </div>
            <div className="contact-white">
              <div>
                <h2>Get in Touch</h2>
                <p>Feel free to drop us a line below!</p>
              </div>
              <input type="text" name="name" id="" placeholder='Your Name' />
              <input type="email" name="email" id="" placeholder='Your Email' />
              <textarea name="message" id="" cols="30" rows="8" placeholder='Type your message here...'></textarea>
              <button type="submit">SEND</button>
            </div>
          </div>
          <p className='usr'>If you're seeking support as a user, please go to User Support.</p>
        </div>
      </div>
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