import React from 'react';
import './CarouselQuickShop.css';

import { Carousel } from 'react-bootstrap'

function CarouselQuickShop() {
    return(
        <div className="quickshop-carousel">
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://assets0.mirraw.com/banner_sliders/7978/Exclusive-saree-collection-%28destop%29_main.jpg?1613466325"
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="https://assets0.mirraw.com/banner_sliders/7629/Banner%28shop-now%29_main.jpg?1612965075"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src="https://assets0.mirraw.com/banner_sliders/8061/Ready-to-ship-Collection-%28Banner%29_main.jpg?1615348760"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://assets0.mirraw.com/banner_sliders/8120/Clearence-sale-%28New%29-3_main.jpg?1615348705"
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://assets0.mirraw.com/banner_sliders/8099/Kalasati-Banner_main.jpg?1612964691"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselQuickShop;