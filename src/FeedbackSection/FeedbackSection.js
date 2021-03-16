import React from 'react';
import './FeedbackSection.css';

import {Carousel} from 'react-bootstrap';

import FirstQuote from '../Assets/first-quote.png';
import SecondQuote from '../Assets/second-quote.png';


const imageItems = [
    { source:FirstQuote, altText:"first quote", interval:1000},
    { source:SecondQuote, altText:"second quote", interval:1000}

]

function FeedbackSection() {
    return(
        <div className="feedback-section">
            <Carousel slide={false}>
                {
                    imageItems.map(
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
    );
}

export default FeedbackSection;