import React from 'react';
import { Carousel } from 'react-bootstrap';


function CarouselImages({carouselImages}) {
    return(
        <Carousel>
                {
                    carouselImages.map(
                        (carouselImage,idx) => <Carousel.Item key={idx} interval={carouselImage.interval}>
                            <img
                                className={carouselImage.class ? carouselImage.class : "d-block w-100"}
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
