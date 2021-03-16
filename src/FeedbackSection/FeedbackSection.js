import React from 'react';
import './FeedbackSection.css';

import CarouselImages from '../CommonComponents/CarouselImages/CarouselImages';

import FirstQuote from '../Assets/first-quote.png';
import SecondQuote from '../Assets/second-quote.png';


const imageItems = [
    { source:FirstQuote, altText:"first quote", interval:1000},
    { source:SecondQuote, altText:"second quote", interval:1000}

]

function FeedbackSection() {
    return(
        <div className="feedback-section">
            <CarouselImages carouselImages={imageItems} />
        </div>
    );
}

export default FeedbackSection;