import React from 'react';
import './Navbar.css';

import { Badge } from 'react-bootstrap';

const navLinks = [
    {
        text:"Sarees",
        link:"#Sarees",
        badgeRequired:false
    },
    {
        text:"Lehengas",
        link:"#Lehengas",
        badgeRequired:false
    },
    {
        text:"Salwar Kamees",
        link:"#SalwarKamees",
        badgeRequired:false
    }, 
    {
        text:"Kurtis",
        link:"#Kurtis",
        badgeRequired:false
    }, 
    {
        text:"Jwellery",
        link:"#Jwellery",
        badgeRequired:false
    }, 
    {
        text:"Kids",
        link:"#Kids",
        badgeRequired:false
    }, 
    {
        text:"Mens",
        link:"#Mens",
        badgeRequired:false
    }, 
    {
        text:"Islamic Wear",
        link:"#IslamicWear",
        badgeRequired:false
    },
    {
        text:"Home & Living",
        link:"#Home&Living",
        badgeRequired:false
    },
    {
        text:"Luxe ",
        link:"#Luxe",
        badgeRequired:true,
        badgeText:"New"
    },
    {
        text:"Flash ",
        link:"#Flash",
        badgeRequired:true,
        badgeText:"Sale"
    },
    {
        text:"Collections",
        link:"#Collections",
        badgeRequired:false
    }
]
  
function Navbar() {
    
    return(
        <div className="nav">
            <div className="navbar">
                { 
                    navLinks.map( 
                        (navLink,idx) => <a className="anchors" key={idx} href={navLink.link}>
                            { navLink.text }
                            { 
                                navLink.badgeRequired ? 
                                <Badge variant="danger">{ navLink.badgeText }</Badge> 
                                : null 
                            }
                            </a>) 
                }
                 
            </div>  
        </div>
    
    );
}

export default Navbar;