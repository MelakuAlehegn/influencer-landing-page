import React from 'react'
import logo from '../assets/logo.png'
import bizicon  from "../assets/bizicon.png";
import inficon from "../assets/inficon.png";
import { Link } from 'react-router-dom';

function Main() {
    return (
        <div className='about'>
            <div className='about-top'>
                <div className='padd-left'>
                    <h1 className='span'><span>
                        2000+
                    </span><br></br>
                        INFLUENCER <br></br> VISITS PER DAY
                    </h1>
                </div>
                <hr className='horizontal'></hr>
                <div className='column'>
                    <h1 className='span middle'><span>
                        FREE
                    </span><br></br>
                        TO SIGN UP
                    </h1>
                    <h1 className='span middle'><span>
                        EASY
                    </span><br></br>
                        TO USE
                    </h1>
                </div>
                <hr className='horizontal'></hr>
                <div className='padd'>
                    <h1 className='span pad'><span>
                        2000+
                    </span><br></br>
                        ENLISTED <br></br> PROGRAMS
                    </h1>
                </div>
            </div>
            <div className='domian'>
                <img src={logo} width={'480px'} alt='logo'></img>
                <div className='main-text'>
                    <p>We connect influencers with relevant businesses that offer commissions and rewards for promoting their items to the proper audiences.</p>
                   <div className='inf'>
                                <img src={inficon} width= '180px' alt='influencer icon'></img>
                                <p>
                                <span>If you're an influencer </span>who's struggling to monetize the attention or looking for an extra source of revenue, this should be your number-one choice. Filter and find the program that fits your niche, and start earning by becoming an affiliate. Don't wait for uncertain offers or sponsorship deals to reach your mail. No matter how small or big you are, there's a program for you here.
                                </p>
                   </div>
                   <div className='biz'>
                   <img src={bizicon} width= '180px' alt='business icon'></img>
                   
                    <p><span>If you're a business</span> with an affiliate/referral program, enlist it here by simply creating a post, and reach thousands of eager influencers without individually contacting them one by one. Let the right content creator promote your product or service. You're not just promoting to thousands of influencers that visit every day but to their millions of viewers. We take no commissions, and enlisting is completely free. So, there's literally no reason for you not to take this advantage.
                    </p>

                   </div>
                    <p className='centered'>Stay relevant, get promoted.</p>
                </div>
            </div>
            <div className='about-bottom'>
                <div className='bottom-left'>
                    <Link to='/aboutus' className='big-link'>ABOUT US</Link>
                    <Link to='/contactus' className='small-links'>CONTACT US</Link>
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
        </div>
    )
}

export default Main