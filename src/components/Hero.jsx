import { useState, useEffect } from "react";
import influencer from '../assets/pexels-pavel-danilyuk-5520327.png';
// import leftHero from '../assets/pexels-pavel-danilyuk-5520327.png'


function Hero() {
    const [textIndex1, setTextIndex1] = useState(0);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [textIndex2, setTextIndex2] = useState(0);
    const text = {
        1: "Find what's relevant to you and earn commissions/rewards. Thousands of programs to choose from.",
        2: "A smart way to monetize shorts, tweets, and posts.",
        3: "Fast and easy way to partner with the right business.",
        4: "Filter by your niche and suggest the perfect product/service for your audience.",
        5: "Nearly all businesses have affiliate programs. We help you find what's best for you.",
        6: "Don't wait for uncertain offers or sponsorship deals to reach your mail.",
        7: "No matter how small or big you are, there's something for you here."
    };
    const text2 = {
        1: "Enlist it here and let it promote itself for free. Make it relevant to thousands of influencers.",
        2: "Simply create and enlist your program for free.",
        3: "Let the right content creator discover it and take it to millions.",
        4: "We take no commissions, no extra charges, no hidden fees.",
        5: "Let us bring your product/service closer to the right eyes.",
        6: "Have the internet sell it for perpetuity without direct sponsorships.",
        7: "You got nothing to lose but a minute to create the post."
    }
    useEffect(() => {
        let intervalId;
        if (isHovered1) {
            intervalId = setInterval(() => {
                setTextIndex1((prevIndex) =>
                    prevIndex + 1 === Object.keys(text).length ? 0 : prevIndex + 1
                );
            }, 2000);
        }

        return () => clearInterval(intervalId);
    }, [isHovered1, text]);
    useEffect(() => {
        let intervalId;
        if (isHovered2) {
            intervalId = setInterval(() => {
                setTextIndex2((prevIndex) =>
                    prevIndex + 1 === Object.keys(text).length ? 0 : prevIndex + 1
                );
            }, 2000);
        }

        return () => clearInterval(intervalId);
    }, [isHovered2, text2]);

    return (
        <div className="hero">
            <div className="hero-container">
                <div className="hero-left">
                    <h1>
                        Have an <br />
                        audience?
                    </h1>
                    <a href="#" className="orange">
                        I'm an INFLUENCER
                    </a>
                    <p
                        className="orange-text"
                        onMouseEnter={() => setIsHovered1(true)}
                        onMouseLeave={() => setIsHovered1(false)}
                    >
                        {isHovered1 ? text[textIndex1 + 1] : text[1]}
                    </p>
                    {/* <img src={influencer} width={"490px"} className='left-image' alt='influencer'></img> */}
                </div>
                <div className="hero-right">
                    <h1>
                        Have an <br />
                        affiliate program?
                    </h1>
                    <a href="#" className="blue">
                        I'm a BUSINESS
                    </a>
                    <p
                        className="blue-text"
                        onMouseEnter={() => setIsHovered2(true)}
                        onMouseLeave={() => setIsHovered2(false)}
                    >
                        {isHovered2 ? text2[textIndex2 + 1] : text2[1]}
                    </p>
                    <img src={influencer} width={"490px"} className='left-image' alt='influencer'></img>
                </div>
            </div>
        </div>
    );
}

export default Hero;