import React from 'react';
import './Header.css';
import ProfilePicture from '../Assets/profile.png';
import ShoppingBag from '../Assets/shopping-bag.png';


const  imageStyle = {
    width: "20px",
    color: "rgb(103,11,25)"
}


function Header () {

    return(
        <div className="header">
            <div className="header">
                <a href="#Contact us">Contact Us   |</a> 
                <a href="#returns">7 Day Returns  |</a> 
                <a href="#track">Track Order  |</a> 
                <a href="#return">Return Order  |</a> 
                <a href="#sell">Sell On Mirraw  |</a> 
                <a href="#survey">Survey</a>
                <div className="header-right">
                    <a href="#profile"><img style={imageStyle} src={ProfilePicture} alt="profile" />LOG IN</a>
                    <a href="#cart"><img style={imageStyle} src={ShoppingBag} alt="cart" />CART(0)</a>
                </div>
            </div>       
        </div>
    );
}

export default Header;