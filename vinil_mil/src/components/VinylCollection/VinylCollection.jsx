import React, { useState } from 'react';

import VinylContainer from '../VinylContainer/VinylContainer'

import './VinylCollection.css'
import ProductModal from '../ProductModal';

function VinylCollection({ collection }) {
    const [openModal, setOpenModal] = useState(false);

    const [selectedVinylObject, setSelectedVinylObject] = useState();

    function handleVinylClick(vinylObject) {
        setSelectedVinylObject(vinylObject);
        setOpenModal(true);
    }

    return (
        <div className="item-collection-container" id="highlights-container">
            <ul id="highlighted-vinyls-ul">
            {collection.map((item, index) => (
                <li key={index}>
                    <VinylContainer vinylObject={item} onClick={handleVinylClick} />
                </li>
            ))}
            </ul>
            <ProductModal isOpen={openModal} setOpenModal={() => {setOpenModal(!openModal)}} vinylObject={selectedVinylObject} />
        </div>
    );
}

export default VinylCollection;
