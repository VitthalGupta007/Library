import React from 'react'
import './Footer.css'

import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return (
        <div className='footer'>
            <div>
                <div className='footer-data'>
                    <div className="contact-details">
                        <h1>Contact Us</h1>
                        <p>Vitthal</p>
                        <p>NIT Kurukshetra</p>
                        <p>Kurukshetra-136119</p>
                        <p>Haryana</p>
                        <p>India</p>
                        <p><b>Email:</b>vitthalgupta007@gmail.com</p>
                    </div>
                    <div className='usefull-links'>
                        <h1>Usefull Links</h1>
                        <a href='#home'>Link-1</a>
                        <a href='#home'>Link-1</a>
                        <a href='#home'>Link-1</a>
                        <a href='#home'>Link-1</a>
                    </div>
                    <div className='librarian-details'>
                        <h1>Librarian</h1>
                        <p>Vitthal</p>
                        <p>Education</p>
                        <p>Contact: +91 8708985673</p>
                    </div>
                </div>
                <div className="contact-social">
                    <a href='#home' className='social-icon'>
                        <TwitterIcon style={{ fontSize: 40, color: "rgb(283,83,75)" }} />
                    </a>
                    <a href='#home' className='social-icon'>
                        <LinkedInIcon style={{ fontSize: 40, color: "rgb(283,83,75)" }} />
                    </a>
                    <a href='#home' className='social-icon'>
                        <TelegramIcon style={{ fontSize: 40, color: "rgb(283,83,75)" }} />
                    </a>
                    <a href='#home' className='social-icon'>
                        <InstagramIcon style={{ fontSize: 40, color: "rgb(283,83,75)" }} />
                    </a>
                </div>
            </div>
            <div className='copyright-details'>
                <p className='footer-copyright'>
                    &#169; 2020 copyright all rights reserved<br />
                    <span>Designed with ❤️ by Vitthal Gupta</span>
                </p>
            </div>
        </div>
    )
}

export default Footer;
