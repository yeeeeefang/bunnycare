import React from 'react';
import { SiApple } from 'react-icons/si';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import './Footer.scss';
// import '../css/Footer.css';

export default function Footer() {

    return (
        <>
            <div className="footerall">
                <img src="./images/loginlogo.svg" alt="" className="logofooter" />
                <div className='footerright'>
                    {/* <div className="social-login">
                        <FaFacebookF className="facebook" />
                        <SiApple className="apple" />
                        <FaGoogle className="google" />
                    </div> */}
                    <span>Copyright © 2024 BunnyCare</span>
                    <span>此為非正式官方網站，無任何後臺功能與商業行為</span>
                </div>
            </div>
        </>
    )

}




