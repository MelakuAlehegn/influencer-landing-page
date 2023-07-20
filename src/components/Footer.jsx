import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className='footer-links'>
                <a href='#' className='terms border-right'>TERMS OF USE</a>
                <Link to='/privacy-policy' className='terms'>PRIVACY POLICY</Link>
            </div>
            <p className='copywrite'>&copy; 2023 affiliatedrefer.com</p>
        </footer>
    )
}

export default Footer