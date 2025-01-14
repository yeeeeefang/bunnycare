import React from 'react';
import './Footer.scss';
import { SiApple } from 'react-icons/si';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
// import '../css/Footer.css';

export default function Footer() {

    return (
        <>
            <div className="footerall">
                <img src="./images/loginlogo.svg" alt="" className="logofooter" />
                <div className='footerright'>
                    <div className="social-login">
                        <FaFacebookF className="facebook" />
                        <SiApple className="apple" />
                        <FaGoogle className="google" />
                    </div>
                    <span>Copyright © 2024 BunnyCare</span>
                </div>
            </div>
        </>
    )

}




