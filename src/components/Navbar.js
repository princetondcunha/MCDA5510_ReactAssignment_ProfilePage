import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div className='header-wrapper'>
                <ul id="mav-mobile" className='right'>
                    <li ><Link className='cta-button' to="/aboutme">About Me</Link></li>
                    <li ><Link className='custom-btn' to="/mytown">My Town</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar