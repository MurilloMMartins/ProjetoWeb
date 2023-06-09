import React from 'react';

import VinylContainer from '../VinylContainer/VinylContainer'

import './VinylCollection.css'

function VinylCollection({ collection }) {
    return (
        <div className="item-collection-container" id="highlights-container">
            <ul id="highlighted-vinyls-ul">
            {collection.map((item, index) => (
                <li key={index}>
                    <VinylContainer filename={item.filename} name={item.title}/>
                </li>
            ))}
            </ul>
        </div>
    );
}

export default VinylCollection;
