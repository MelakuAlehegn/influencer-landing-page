import React from 'react';
import influencer from '../assets/influencer.png';
import leftHero from '../assets/pexels-pavel-danilyuk-5520327.png'

function Hero() {
    return (
        <div class="hero">
            <div class="hero-container">
                <div class="hero-left">
                    <h2>Have an audience?</h2>
                    <a src='#'>I'm an INFLUENCER</a>
                    <p>Find what's relevant to you and earn commissions
                        & rewards. Thousands of programs to choose from.</p>
                    <img src={influencer} width={"200px"}></img>
                </div>
                <div class="hero-right">
                    <h2>Have an affiliate program?</h2>
                    <a src='#'>I'm a BUSINESS</a>
                    <p>Enlist it here and let it promote itself for free.
                        Make it relevant to thousands of influencers.</p>
                    <img src={leftHero} width={"200px"}></img>
                </div>
            </div>
        </div>
    )
}

export default Hero