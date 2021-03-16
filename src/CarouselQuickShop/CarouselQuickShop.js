import React from 'react';
import './CarouselQuickShop.css';

import {Carousel} from 'react-bootstrap';

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
            <Carousel >
                {
                    carouselImages.map(
                        (carouselImage,idx) => <Carousel.Item key={idx} interval={carouselImage.interval}>
                            <img
                                className="d-block w-100"
                                src={carouselImage.source}
                                alt={carouselImage.altText} 
                            />
                        </Carousel.Item>
                    )
                }
            </Carousel>
        </div>
    )
}

export default CarouselQuickShop;