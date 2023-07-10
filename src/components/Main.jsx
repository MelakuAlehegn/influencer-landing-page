import React from 'react'
import logo from '../assets/logo.png'
function Main() {
    return (
        <div className='about'>
            <div className='about-top'>
                <div>
                    <h1 className='span'><span>
                        2000+
                    </span><br></br>
                        INFLUENCER <br></br> VISITS PER DAY
                    </h1>
                </div>
                <div className='column'>
                    <h1 className='span middle'><span>
                        FREE
                    </span><br></br>
                        TO SIGNUP
                    </h1>
                    <h1 className='span middle'><span>
                        EASY
                    </span><br></br>
                        TO USE
                    </h1>
                </div>
                <div>
                    <h1 className='span'><span>
                        2000+
                    </span><br></br>
                        INLISTED <br></br> PROGRAMS
                    </h1>
                </div>
            </div>
            <div className='domian'>
                <img src={logo} width={'480px'}></img>
            </div>
            <div className='about-bottom'>
                <div className='bottom-left'>
                    <a href='#' className='big-link'>ABOUT US</a>
                    <a href='#' className='small-links'>CONTACT US</a>
                    <a href='#' className='small-links'>USER SUPPORT</a>
                    <a href='#' className='small-links'>FAQ</a>
                </div>
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
            <footer>
                <div className='footer-links'>
                    <a href='#' className='terms border-right'>TERMS OF USE</a>
                    <a href='#' className='terms'>PRIVACY POLICY</a>
                </div>
                <p className='copywrite'>&copy; 2023 affiliatedrefer.com</p>
            </footer>
        </div>
    )
}

export default Main