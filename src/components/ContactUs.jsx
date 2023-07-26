import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFax } from 'react-icons/fa';

function ContactUs() {
  return (
    <div className='cc'>
      <div className='contactus-page'>
        <div className="contact-top">
          <div className="contact-red">

            <h3>Contact Info</h3>
            <div className='new'>
              <div>
                <FaMapMarkerAlt />
                <p>7700, Rajbari Sadar, Bangladesh</p>
              </div>
              <div>
                <FaEnvelope />
                <p>info@affiliatedrefer.com</p>
              </div>
              <div>
                <FaPhone />
                <p>+8801576448378</p>
              </div>
              <div>
                <FaFax />
                <p>---------------------</p>
              </div>
            </div>
          </div>
          <div className="contact-white">
            <div>
              <h2>Get in Direct Contact</h2>
              <p>If you're seeking support as a user, please go to User Support.</p>
            </div>
            <input type="text" name="name" id="" placeholder='Your Name' />
            <input type="email" name="email" id="" placeholder='Your Email' />
            <textarea name="message" id="" cols="30" rows="8" placeholder='Please state your concerns and add necessary details here…'></textarea>
            <button type="submit">SEND</button>
          </div>
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