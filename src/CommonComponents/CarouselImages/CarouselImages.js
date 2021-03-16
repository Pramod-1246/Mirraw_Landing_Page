import React from 'react';
import { Carousel } from 'react-bootstrap';


function CarouselImages({carouselImages, slide}) {
    return(
        <Carousel slide={slide} fade={false}>
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
    );
}

export default CarouselImages;
