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
        text:"Jewellery",
        link:"#Jewellery",
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
        text:"Collections",
        link:"#Collections",
        badgeRequired:false
    }
]

const displayCardDetails = {
    
    "Sarees":[
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
        ],
        "Lehengas" :[
            {
                type:"list",
                title:"FABRIC",
                list: [
                    "Net",
                    "Silk",
                    "Georgette",
                    "Velvet"
                ]
            },
            {
                type:"list",
                title:"OCCASION",
                list:[        
                    "Party Wear",
                    "Bridal",
                    "Casual"
                ]
            },
            {
                type:"list",
                title:"STYLE",
                list: [
                    "Ghagra Choli",
                    "Lehenga Choli",
                    "Crop Top",
                    "Readymade",
                ]
            },
            {
                type:"list",
                title:"COLLECTION",
                list:[
                    "Ethnic",
                    "Pakistani",
                    "Lehenga Saree",
                    "Floral"
                ]
            }
        ],
        "Salwar Kamees" : [
            {
                type:"list",
                title:"STYLE",
                list:[
                    "Anarkali Suits",
                    "Straight Suits",
                    "Churidar Suits",
                    "Punjabi Suits",
                    "Dress Material",
                    "Abaya Suits",
                    "Pakistani Suits",
                    "Palazzo Suits",
                    "Sharara Suits",
                    "Patiala Suits"
                ]
            },
            {
                type:"list",
                title:"FABRIC",
                list:[
                    "Cotton",
                    "Georgette",
                    "Chanderi",
                    "Silk",
                    "Net",
                    "Crepe",
                    "Cotton Silk"
                ]
            },
            {
                type:"list",
                title:"OCCASION",
                list:[
                    "Party Wear",
                    "Wedding Salwar",
                    "Festive"
                ]
            },
            {
                type:"list",
                title:"COLLECTION",
                list: [
                    "Best Sellers",
                    "New Arrivals",
                    "Combo Salwar",
                    "Ready to Ship",
                    "Collar Neck Designs",
                    "Ethnic Suits",
                    "Patiala Combo",
                    "Bollywood Salwars"
                ]
            },
            {
                type:"list",
                title:"STITCHING",
                list:[
                    "Readymade Suits",
                    "Semi Stitched Suits"
                ]
            }
        ],
        "Kurtis":[
            {
                type:"list",
                title:"FABRIC",
                list:[
                    "Silk",
                    "Chiffon",
                    "Georgette",
                    "Cotton",
                    "Rayon",
                    "Crepe",
                    "Chanderi"
                ]
            },
            {
                type:"list",
                title:"OCCASION",
                list:[
                    "Party Wear",
                    "Festive",
                    "Casual",
                    "Wedding"
                ]
            },
            {
                type:"list",
                title:"WORK",
                list:[
                    "Printed",
                    "Embroidered",
                    "Plain",
                    "Chikankari",
                    "Stone Work",
                    "Heavy Work",
                    "Mirror Work"
                ]
            },
            {
                type:"list",
                title:"STYLE",
                list:[
                    "Long",
                    "Traditional",
                    "Short",
                    "Contemporary",
                    "Kaftans",
                    "Kurta Sets"
                ]
            },
            {
                type:"list",
                title:"BOTTOM WEAR",
                list:[
                    "Palazzos",
                    "Harem Pants",
                    "Leggings",
                    "Patiala Pants",
                    "Skirts",
                    "Leggings Combo"
                ]
            }
        ],
        "Jewellery": [
            {
                type:"list",
                title:"TYPE",
                list:[
                    "Necklace Sets",
                    "Necklaces",
                    "Bangles & Bracelets",
                    "Earrings",
                    "Anklets",
                    "Pendants",
                    "Silk Thread Jewellery"
                ]
            },
            {
                type:"list",
                title:"WORK",
                list:[
                    "Temple Jewellery",
                    "Antique Jewellery",
                    "Kundan Jewellery",
                    "South Indian Jewellery",
                    "Pearl Jewellery",
                    "Handmade Jewellery"
                ]
            },
            {
                type:"list",
                title:"WEDDING",
                list:[
                    "Bridal Jewellery",
                    "Bridal Sets",
                    "Mangalsutra",
                    "Maang Tikka",
                    "Rings",
                    "Toe Rings",
                    "Baju Band",
                    "Nose Rings"
                ]
            },
            {
                type:"list",
                title:"FEATURED",
                list: [
                    "Silk Thread Earrings",
                    "Brooch",
                    "Silk Thread Bangles",
                    "Studs",
                    "Jhumkas",
                    "Choker Necklace",
                    "Danglers & Drops"
                ]
            },
            {
                type:"list",
                title:"COLLECTION",
                list:[
                    "Gemstones",
                    "Ear Cuffs",
                    "Designer Jewellery",
                    "Hair Accessories",
                    "Oxidised Jewellery",
                    "Jewellery Box",
                    "Ethnic Jewellery"
                ]
            }
        ],
        "Kids": [
            {
                type:"list",
                title:"GIRLS",
                list:[
                    "Lehenga",
                    "Salwar Suits",
                    "Gowns",
                    "Sarees",
                    "Frocks",
                    "Dresses",
                    "Girls Jackets"
                ]
            },
            {
                type:"list",
                title:"BOYS",
                list:[
                    "Kurta Pyjamas",
                    "Indo Western",
                    "Sherwani",
                    "Dhoti Kurta",
                    "Nehru Jacket"
                ]
            },
            {
                type:"list",
                title:"COLLECTIONS",
                list:[
                    "Jewelley"
                ]
            }
        ],
        "Mens": [
            {
                type:"list",
                title:"CLOTHING",
                list:[
                    "Kurta Pajama",
                    "Dhoti Kurta",
                    "Nehru Jacket",
                    "Kurtas",
                    "Blazers",
                    "Sherwani",
                    "Pathani Suits",
                    "Bandhgala",
                    "Dhoti"
                ]
            },
            {
                type:"list",
                title:"JEWELLERY",
                list:[
                    "Earrings",
                    "Studs",
                    "Bracelets",
                    "Pendants"
                ]
            },
            {
                type:"list",
                title:"ACCESSORIES",
                list:[
                    "Turbans",
                    "Cufflinks"
                ]
            },
            {
                type:"list",
                title:"FOOTWEAR",
                list:[
                    "Casual"
                ]
            },
            
        ],
        "Home & Living":[
            {
                type:"list",
                title:"BEDDING",
                list:[
                    "Bed Sheets",
                    "Quilts"
                ]
            },
            {
                type:"list",
                title:"FURNISHING",
                list:[
                    "Curtains",
                    "Cusion Covers",
                    "Carpets"
                ]
            },
            {
                type:"list",
                title:"DECOR",
                list:[
                    "Idols & Figurines",
                    "Candles & Aromas",
                    "Vases",
                    "Diyas",
                    "Door Hangings",
                    "Pooja Items"
                ]
            },
            {
                type:"list",
                title:"WALL ACCENTS",
                list:[
                    "Paintings",
                    "Wall Clocks",
                    "Wall Art",
                    "Photo Frames",
                    "Decorative Plates"
                ]
            },
            {
                type:"list",
                title:"KITCHEN & DINING",
                list:[
                    "Cookware",
                    "Utensils",
                    "Table Mats & Runner",
                    "Coasters",
                    "Trays"
                ]
            }
        ],
        "Luxe ": [
            {
                type:"list",
                title:"WOMENSWEAR",
                list:[
                    "Kurtis",
                    "Dresses",
                    "Sarees",
                    "Salwar Suits",
                    "Tops"
                ]
            },
            {
                type:"list",
                title:"BRANDS",
                list:[
                    "Ritu Kumar",
                    "Payal Singhal",
                    "August Line",
                    "Sole House",
                    "Anj",
                    "Mayank Modi",
                    "Anju & Harleen"
                ]
            },
            {
                type:"list",
                title:"OTHERS",
                list:[
                    "Footwear"
                ]
            }
        ],
        "Collections":[
            {
                type:"list",
                title:"ROOTS",
                list:[
                    "Sarees",
                    "Kurtas & Suits",
                    "Dress Material",
                    "Blouses",
                    "Dupattas",
                    "Bottoms",
                    "Jewellery"
                ]
            },
            {
                type:"list",
                title:"WESTERN WEAR",
                list:[
                    "Tops",
                    "Dresses",
                    "Tunics",
                    "Gowns",
                    "Indowestern",
                    "Palazzos",
                    "Leggings",
                    "Skirts"
                ]
            },
            {
                type:"list",
                title:"ACCESSORIES",
                list:[
                    "Stoles & Dupattas",
                    "Shawls",
                    "Bags",
                    "Footwear"
                ]
            },
            {
                type:"list",
                title:"BEAUTY",
                list:[       
                    "Makeup",
                    "Face Care",
                    "Hair Care",
                    "Body Care",
                    "Female Hygiene",
                    "Personal Hygiene"
                ]
            },
            {
                type:"list",
                title:"FOOD",
                list:[
                    "Packaged Food",
                    "Beverages",
                    "Baby Food"
                ]
            },
            {
                type:"list",
                title:"ISLAMIC",
                list:[ 
                    "Abaya",
                    "Hijab",
                    "Burka",
                    "Tunics",
                    "Kaftans",
                    "Kids Abaya"
                ]
            }
        ]
    }

  
function Navbar() {
    const [showDisplay, setShowDisplay] = useState(false);
    const [displayTab, setDisplayTab] = useState([]);

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
    },[showDisplay, displayTab])

    return(
        <div className="nav">
            <div className="navbar">
                { 
                    navLinks.map( 
                        (navLink,idx) => <a 
                        onMouseEnter={e => {
                            setShowDisplay(true);
                            let selectedTab = e._targetInst.memoizedProps.children[0];
                            setDisplayTab(displayCardDetails[selectedTab]);
                            console.log(selectedTab);
                            }} 
                        onMouseLeave={() => {
                            setShowDisplay(false);
                        }} className="anchors" key={idx} href={navLink.link}>
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
                <DisplayCard cardDetails={displayTab}/>
            </div> 
        </div>
    
    );
}

export default Navbar;