import React from 'react'
import logo from '../assets/AR Logo2.png'
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
                <h1>affiliated<span>refer</span>.com</h1>
                <img src={logo} width={'40px'}></img>
            </div>
            <div className='about-bottom'>
                <div className='bottom-left'>
                    <h1>ABOUT US</h1>
                    <h2>CONTACT US</h2>
                    <h2>USER SUPPORT</h2>
                    <h2>FAQ</h2>
                </div>
                <div className='bottom-right'>
                    <h1>BLOG POSTS</h1>
                    <h1>FOLLOW US</h1>
                    <div className='icons'>
                        <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.pinterest.com"><i className="fab fa-pinterest"></i></a>
                        <a href="https://www.youtube.com"><i className="fab fa-youtube"></i></a>
                        <a href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
            <footer>
                <a href='#'>TERMS OF USE</a>
                <a href='#'>PRIVACY POLICY</a>
                <p>&copy; 2023 affiliatedrefer.com</p>
            </footer>
        </div>
    )
}

export default Main