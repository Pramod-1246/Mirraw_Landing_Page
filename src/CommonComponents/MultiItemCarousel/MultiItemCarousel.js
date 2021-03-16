import React from 'react';
import './MultiItemCarousel.css';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2// optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


function MultiItemCarousel({items}) {
return (
    <div className="carousel-group">
        <Carousel
            responsive={responsive}
            autoPlaySpeed={1000}
            customTransition="transform 300ms ease-in-out"
            transitionDuration={1000}
        >
            {
                items.map(
                    (item,idx) => <img     
                                      key={idx}
                                      className="carousel-image" 
                                      src={item.src} 
                                      alt={item.alt} 
                                  />
                )
            }
        </Carousel>
    </div>
    );
}

export default MultiItemCarousel;