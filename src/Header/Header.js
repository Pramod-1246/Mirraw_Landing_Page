import React from 'react';
import './Header.css';
import ProfilePicture from '../Assets/profile.png';
import ShoppingBag from '../Assets/shopping-bag.png';


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

    return(
        <div className="header">
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
                            (headerButtonLink,idx) => <a key={idx} href={ headerButtonLink.link }>
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
                </div>
            </div>       
        </div>
    );
}

export default Header;