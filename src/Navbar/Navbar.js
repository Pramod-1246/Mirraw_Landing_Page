import React from 'react';
import './Navbar.css';

import { Badge } from 'react-bootstrap';

function Navbar() {
    return(
        <div className="nav">
            <div className="navbar">
                <a href="#Sarees">Sarees</a>
                <a href="#Lehengas">Lehengas</a> 
                <a href="#Salwar Kamees">Salwar Kamees</a> 
                <a href="#Kurtis">Kurtis</a> 
                <a href="#Jwellery">Jwellery</a> 
                <a href="#Kids">Kids</a> 
                <a href="#Mens">Mens</a> 
                <a href="#Islamic Wear">Islamic Wear</a> 
                <a href="#Home & Livin">Home & Livin</a> 
                <a href="#LUXE">LUXE{' '}<Badge variant="danger">New</Badge></a> 
                <a href="#Flash">Flash{' '}<Badge variant="danger">sale</Badge></a> 
                <a href="#Collections">Collections</a> 
            </div>  
        </div>
    );
}

export default Navbar;