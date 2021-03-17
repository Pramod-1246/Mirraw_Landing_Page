import React, { useState } from 'react';
import './Header.css';
import ProfilePicture from '../Assets/profile.png';
import ShoppingBag from '../Assets/shopping-bag.png';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const  imageStyle = {
    width: "20px",
    color: "rgb(103,11,25)"
}

const headerLinks = [
    { text:"Contact Us", link:"#ContactUs", isFinal:false},
    { text:"7 Day Returns", link:"#returns", isFinal:false},
    { text:"Track Order", link:"#track", isFinal:false},
    { text:"Return Order", link:"#Return", isFinal:false},
    { text:"Sell On Mirraw", link:"#Sell", isFinal:false},
    { text:"Survey", link:"#Survey", isFinal:true}
]

const headerButtonLinks = [
    { text:"LOG IN", link:"#profile", imageStyle:imageStyle, imageSource:ProfilePicture, altText: "Profile" },
    { text:"CART(0)", link:"#cart", imageStyle:imageStyle, imageSource:ShoppingBag, altText:"cart"}
]

function Header () {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <div className="header-container">
            <div className="header">
                { 
                    headerLinks.map(
                        (headerLink,idx) => <a  key={idx} href={headerLink.link}>
                            {
                                headerLink.isFinal ? 
                                headerLink.text :
                                headerLink.text + "   |"
                            }
                        </a>
                    ) 
                }
                <div className="header-right">
                    {
                        headerButtonLinks.map(
                            (headerButtonLink,idx) => <a key={idx} onClick={idx===0 ? handleClick : null} href={ headerButtonLink.link }>
                                <img 
                                    style={ headerButtonLink.imageStyle } 
                                    src={ headerButtonLink.imageSource } 
                                    alt={ headerButtonLink.altText } 
                                />
                                {
                                    headerButtonLink.text
                                }
                            </a>
                        )
                        }
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                                            <MenuItem onClick={handleClose}>
                                                <div className="hover-card-login">
                                                    Existing user?
                                                    <button className="hover-card-button">Login</button>
                                                </div>
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <div className="hover-card-register">
                                                    New to Mirraw
                                                    <button className="hover-card-button">Register</button>
                                                </div>
                                            </MenuItem>
                        </Menu>
                </div>
            </div>       
        </div>
    );
}

export default Header;