import React from 'react';
import './FooterSection.css';

import PressImages from '../Assets/press-images.png';
import SocialImages from '../Assets/social-images.png' 

function FooterSection () {
    return(
        <div className="footer-section">
            <div className="cols">
                <ul>
                    <h5>HELP</h5>
                    <li>Survey</li>
                    <li>How to Buy</li>
                    <li>Track Order</li>
                    <li>Payments</li>
                    <li>Shipping</li>
                    <li>Cancellation</li>
                    <li>FAQ</li>
                    <li>Helpdesk</li>
                </ul>
            </div>
            <div className="cols">
                <ul>
                    <h5>COMPANY</h5>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Careers</li>
                    <li>Blog</li>
                    <li>Terms</li>
                    <li>Privacy</li>
                </ul>
            </div>
            <div className="cols">
                <ul>
                    <h5>BUSINESS</h5>
                    <li>International Buyers</li>
                    <li>Sell On Mirraw</li>
                    <li>Designer Login</li>
                </ul>
            </div>
            <div className="cols">
                <ul>
                    <h5>COUPON PARTNERS</h5>
                    <li>Mirraw Coupons</li>
                    <li>Mirraw Offers</li>
                    <h5>SOCIAL</h5>
                    <div>
                        <img style={{width:"150px"}} src={SocialImages} alt="social" />
                    </div>
                </ul>
            </div>
            <div className="cols">
                <ul>
                    <h5>PRESS</h5>
                    <img style={{width:"150px"}} src={PressImages} alt="press"/>
                </ul>
            </div>
        </div>
    );
}

export default FooterSection;