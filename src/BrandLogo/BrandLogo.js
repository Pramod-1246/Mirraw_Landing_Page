import React from 'react';
import './BrandLogo.css';

import SearchButton from '../Assets/search.png';
import BrandLogoImage from '../Assets/brand-logo.png';


const searchStyle = {
    width:"50px",
    height:"8vh",
    paddingBottom:"5px"
}

const brandLogoDimensions = {
    width:"15vw",
    height:"12vh"
}

function BrandLogo() {
    return(
        <div className="brand-searchbar">
            <img src={BrandLogoImage} style={brandLogoDimensions} alt="brand name" />
            <div className="brand-searchbar-right">
                <input type="text" placeholder={"Search for Something......"} />
                <img src={SearchButton} style={searchStyle} alt="search"/>
            </div>
        </div>
    );
}

export default BrandLogo;