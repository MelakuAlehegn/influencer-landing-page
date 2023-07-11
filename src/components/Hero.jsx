import React from 'react';
import influencer from '../assets/influencer.png';
// import leftHero from '../assets/pexels-pavel-danilyuk-5520327.png'

function Hero() {
    return (
        <div className="hero">
            <div className="hero-container">
                <div className="hero-left">
                    <h1>Have an <br></br> audience?</h1>
                    <a src='#' className='orange'>I'm an INFLUENCER</a>
                    <p className='orange-text'>Find what's relevant to you and earn commissions
                        & rewards. Thousands of programs to choose from.</p>
                    <img src={influencer} width={"440px"} className='left-image' alt='influencer'></img>
                </div>
                <div className="hero-right">
                    <h1>Have an <br></br>affiliate program?</h1>
                    <a src='#' className='blue'>I'm a BUSINESS</a>
                    <p className='blue-text'>Enlist it here and let it promote itself for free.
                        Make it relevant to thousands of influencers.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero