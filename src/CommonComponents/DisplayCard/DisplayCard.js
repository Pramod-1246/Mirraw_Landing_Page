import React from 'react';
import './DisplayCard.css';

function DisplayCard({ cardDetails }) {
    return(
        <div className="displayCard">
            {
                cardDetails.map(
                    (cardDetail, idx) => <div key={idx} className="display-cols">
                        <ul>
                            <h5>{cardDetail.title}</h5>
                            {
                                cardDetail.list.map(
                                    (listItems, listIdx) => <li key={listIdx}>{listItems}</li>
                                )
                            }
                        </ul>
                        </div>
                )
            }
        </div>
    );
}

export default DisplayCard;