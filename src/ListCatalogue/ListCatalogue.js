import React from 'react';
import CatalogueList1 from '../Assets/catalogue-list-1.png'
import CatalogueList2 from '../Assets/catalogue-list-2.png';
import CatalogueList3 from '../Assets/catalogue-list-3.png';
import CatalogueList4 from '../Assets/catalogue-list-4.png';

import { ListGroup } from 'react-bootstrap';

const imageStyle = {
    width:"95vw"
}

function ListCatalogue() {
    return(
        <div className="list-catalogue">
            <ListGroup>
                <ListGroup.Item><img style={imageStyle} src={CatalogueList1} alt="list1" /></ListGroup.Item>
                <ListGroup.Item><img style={imageStyle} src={CatalogueList2} alt="list2" /></ListGroup.Item>
                <ListGroup.Item><img style={imageStyle} src={CatalogueList3} alt="list3" /></ListGroup.Item>
                <ListGroup.Item><img style={imageStyle} src={CatalogueList4} alt="list4" /></ListGroup.Item>
                {/* <ListGroup.Item><img style={imageStyle} src={CatalogueList1} alt="list1" />s</ListGroup.Item> */}
            </ListGroup>
        </div>
    );
}

export default ListCatalogue;