import React from 'react';

import SidelineHeader from '../CommonComponents/SidelineHeader/SidelineHeader';
import MultiItemCarousel from '../CommonComponents/MultiItemCarousel/MultiItemCarousel';

const imageList = [
    { 
        src:"https://assets0.mirraw.com/images/2009504/612-Crepe_%281%29_small.jpg?1536651112",
        alt:"altImage0"
    },
    {
        src:"https://assets0.mirraw.com/images/8756888/IMG_4816_small.jpg?1614442070",
        alt:"altImage1"
    },
    {
        src:"https://assets0.mirraw.com/images/7020989/image_small.jpeg?1557736006",
        alt:"altImage2"
    },
    {
        src:"https://assets0.mirraw.com/images/7241770/image_small.jpeg?1564324410",
        alt:"altImage3"
    },
    {
        src:"https://assets0.mirraw.com/images/7001281/DZ18822_small.jpg?1557223344",
        alt:"altImage4"
    },
    {
        src:"https://assets0.mirraw.com/images/7241773/image_small.jpeg?1564324467",
        alt:"altImage5"
    }
]

function BestSellerComponent() {
    return(
        <div className="best-seller-carousel">
           <SidelineHeader title={"BESTSELLER PRODUCTS"} />
           <MultiItemCarousel items={imageList}/>
        </div>
    );
}

export default BestSellerComponent;