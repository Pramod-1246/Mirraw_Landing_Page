import React from 'react';
import './CarouselQuickShop.css';

import CarouselImages from '../CommonComponents/CarouselImages/CarouselImages';

const carouselImages = [
    { 
        source:"https://assets0.mirraw.com/banner_sliders/7978/Exclusive-saree-collection-%28destop%29_main.jpg?1613466325",
        altText:"First Slide",
        interval:1000
    },
    {
        source:"https://assets0.mirraw.com/banner_sliders/7629/Banner%28shop-now%29_main.jpg?1612965075",
        altText:"Second Slide",
        interval:1000
    },
    {
        source:"https://assets0.mirraw.com/banner_sliders/8061/Ready-to-ship-Collection-%28Banner%29_main.jpg?1615348760",
        altText:"Third Slide",
        interval:1000
    },
    {
        source:"https://assets0.mirraw.com/banner_sliders/8120/Clearence-sale-%28New%29-3_main.jpg?1615348705",
        altText:"Fourth Slide",
        interval:1000
    },
    {
        source:"https://assets0.mirraw.com/banner_sliders/8099/Kalasati-Banner_main.jpg?1612964691",
        altText:"Fifth Slide",
        interval:1000
    }
]

function CarouselQuickShop() {
    return(
        <div className="quickshop-carousel">
            <CarouselImages carouselImages={carouselImages}/>
        </div>
    )
}

export default CarouselQuickShop;