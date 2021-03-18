import React from 'react';
import './BrandLogo.css';

import SearchButton from '../Assets/search.png';
import BrandLogoImage from '../Assets/brand-logo.png';


const brandLogoDimensions = {
    width:"15vw",
    height:"12vh"
}

function BrandLogo() {
    return(
        <div className="brand-searchbar">
            <img src={BrandLogoImage} style={brandLogoDimensions} alt="brand name" />
            <div className="brand-searchbar-right">
                <input type="text" placeholder={"Search Something..."} />
                <img src={SearchButton} alt="search"/>
            </div>
        </div>
    );
}

export default BrandLogo;