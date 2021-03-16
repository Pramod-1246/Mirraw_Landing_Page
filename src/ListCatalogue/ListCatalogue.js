import React from 'react';
import CatalogueList1 from '../Assets/catalogue-list-1.png'
import CatalogueList2 from '../Assets/catalogue-list-2.png';
import CatalogueList3 from '../Assets/catalogue-list-3.png';
import CatalogueList4 from '../Assets/catalogue-list-4.png';

import { ListGroup } from 'react-bootstrap';

const imageStyle = {
    width:"95vw"
}

const imageCatalogueList = [
    { image:CatalogueList1, altText:"list1", style:imageStyle },
    { image:CatalogueList2, altText:"list2", style:imageStyle },
    { image:CatalogueList3, altText:"list3", style:imageStyle },
    { image:CatalogueList4, altText:"list4", style:imageStyle }
]

function ListCatalogue() {
    return(
        <div className="list-catalogue">
            <ListGroup>
                {
                    imageCatalogueList.map(
                        imageCatalogueItem => <ListGroup.Item>
                            <img
                                style={imageCatalogueItem.style}
                                src={imageCatalogueItem.image}
                                alt={imageCatalogueItem.altText} 
                            />
                        </ListGroup.Item>
                    )
                }
            </ListGroup>
        </div>
    );
}

export default ListCatalogue;