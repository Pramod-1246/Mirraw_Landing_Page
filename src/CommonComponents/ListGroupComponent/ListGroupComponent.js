import React from 'react';

import { ListGroup } from 'react-bootstrap';

function ListGroupComponent({imageCatalogueList, viewAsHorizontal}) {
    return(
        <>
            {
                viewAsHorizontal ?
                <ListGroup horizontal="sm">
                    {
                        imageCatalogueList.map(
                            (imageCatalogueItem,idx) => <ListGroup.Item key={idx}>
                                <img
                                    style={imageCatalogueItem.style}
                                    src={imageCatalogueItem.image}
                                    alt={imageCatalogueItem.altText} 
                                />
                            </ListGroup.Item>
                        )
                    }
                </ListGroup>:
                <ListGroup >
                    {
                        imageCatalogueList.map(
                            (imageCatalogueItem,idx) => <ListGroup.Item key={idx}>
                                <img
                                    style={imageCatalogueItem.style}
                                    src={imageCatalogueItem.image}
                                    alt={imageCatalogueItem.altText} 
                                />
                            </ListGroup.Item>
                        )
                    }
                </ListGroup>
            }
        </>
        
    );
}

export default ListGroupComponent;