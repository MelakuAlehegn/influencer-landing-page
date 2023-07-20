import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className='footer-links'>
                <Link to='/terms-of-use' className='terms border-right'>TERMS OF USE</Link>
                <Link to='/privacy-policy' className='terms'>PRIVACY POLICY</Link>
            </div>
            <p className='copywrite'>&copy; 2023 affiliatedrefer.com</p>
        </footer>
    )
}

export default Footer