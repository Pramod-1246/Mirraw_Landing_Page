import React from 'react';
import './SignupSection.css';

function SignupSection(){
    return(
        <div className="signup-section">
            <h4>SIGN UP TO RECIEVE UPDATES</h4>
            <p className="signup-subheading">
                Be the first to know about latest offers and discounts on Mirraw
            </p>
            <input type='text' placeholder="Enter your Email Address" />
            <button type="button" > Subscribe!</button>
        </div>
    );
}

export default SignupSection;