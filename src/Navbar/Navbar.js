import React, { useState, useEffect } from 'react';
import './Navbar.css';

import DisplayCard from '../CommonComponents/DisplayCard/DisplayCard';

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

const displayCardDetails = {
    Sarees: [
            { 
                type:"list",
                title:"ROOTS",
                list: 
                [
                    "Banarasi Silk",
                    "Kanchipuram Silk",
                    "Bhagalpuri Silk",
                    "Mysore Silk",
                    "Manipuri Silk",
                    "Kota Silk",
                    "Bandhani",
                    "Paithani",
                    "Kota",
                    "Patola",
                    "Jamdani",
                    "Maheshwari",
                    "Kerala Kasavu",
                    "Bengali",
                    "Uppada",
                    "Nauvari",
                    "Banarasi"
                ]
            },
            {    
                type:"list",
                title:"FABRIC",
                list: 
                [
                    "Georgette",
                    "Art Silk",
                    "Cotton",
                    "Pure Silk",
                    "Net",
                    "Velvet",
                    "Chiffon",
                    "Brasso",
                    "Chanderi",
                    "Organza Sarees",
                    "Tussar Silk",
                    "Crepe",
                    "Satin"
                ]
            },
            {
                type:"list",
                title:"OCCASION",
                list:
                [
                    "Party Wear",
                    "Wedding",
                    "EID",
                    "Diwali",
                    "WORK",
                    "Embroidered",
                    "Printed",
                    "Heavy Work Sarees",
                    "Handloom Sarees",
                    "Hand Woven Sarees",
                    "Chikankari",
                    "Kalamkari",
                    "Ikat"
                ]
            },
            {
                type:"list",
                title:"COLLECTIONS",
                list:
                [
                    "Exclusive",
                    "Bridal Sarees",
                    "Pre Stitched Sarees",
                    "Half Saree",
                    "Traditional Sarees",
                    "South Indian Sarees",
                    "Bollywood Sarees",
                    "Best Sellers",
                    "New Arrivals"
                ]
            },
            {
                type:"list",
                title:"MORE",
                list:
                [
                    "Blouses",
                    "Readymade Blouse",
                    "Blouse Fabric​",
                    "Sleeveless blouse",
                    "Bridal Blouses",
                    "Petticoats",
                    "Blouse Neck Designs"
                ]
            }
        ]
    }

  
function Navbar() {
    const [showDisplay, setShowDisplay] = useState(false)

    useEffect(() => {
        if(showDisplay){
            const hoverSection = document.getElementById("hover");
            hoverSection.classList.remove("hover-section-remove");
            hoverSection.classList.add("hover-section-show");
        }
        else{
            const hoverSection = document.getElementById("hover");
            hoverSection.classList.remove("hover-section-show");
            hoverSection.classList.add("hover-section-remove")
        }
    },[showDisplay])

    return(
        <div className="nav">
            <div className="navbar">
                { 
                    navLinks.map( 
                        (navLink,idx) => <a onMouseEnter={() => setShowDisplay(true)} onMouseLeave={() => setShowDisplay(false)} className="anchors" key={idx} href={navLink.link}>
                            { navLink.text }
                            { 
                                navLink.badgeRequired &&
                                <Badge variant="danger">{ navLink.badgeText }</Badge> 
                            }
                            </a>) 
                }
                 
            </div> 
            <div id="hover" style={{postion:"absolute"}}
                onMouseEnter={() => setShowDisplay(true)} 
                onMouseLeave={() => setShowDisplay(false)} 
                className="hover-section-remove"
            >
                <DisplayCard cardDetails={displayCardDetails.Sarees}/>
            </div> 
        </div>
    
    );
}

export default Navbar;