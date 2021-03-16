import React from 'react';
import './SidelineHeader.css';

function SidelineHeader({title}) {
    return(
        <h2 className="decorated">
            <span>{title}</span>
        </h2>
    )
}

export default SidelineHeader;