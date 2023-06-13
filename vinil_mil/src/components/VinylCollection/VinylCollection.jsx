import React, { useState } from 'react';

import VinylContainer from '../VinylContainer/VinylContainer'

import './VinylCollection.css'
import ProductModal from '../ProductModal';

function VinylCollection({ curUser, collection, addItemToShoppingCart }) {
    const [openModal, setOpenModal] = useState(false);

    const [selectedVinylObject, setSelectedVinylObject] = useState();

    function handleVinylClick(vinylObject) {
        setSelectedVinylObject(vinylObject);
        setOpenModal(true);
    }

    const allowItemAddition = (curUser === undefined || curUser.admin_privileges === false);
    return (
        <div className="item-collection-container" id="highlights-container">
            <ul id="highlighted-vinyls-ul">
            {collection.map((item, index) => (
                <li key={index}>
                    <VinylContainer vinylObject={item} onClick={handleVinylClick} />
                </li>
            ))}
            </ul>
            <ProductModal isOpen={openModal} setOpenModal={() => {setOpenModal(!openModal)}} vinylObject={selectedVinylObject} addItemToShoppingCart={addItemToShoppingCart} allowItemAddition={allowItemAddition}/>
        </div>
    );
}

export default VinylCollection;
