import React from 'react';

import './ProductModal.css'

function ProductModal({ isOpen, setOpenModal, vinylObject}) {
    const BACKGROUND_STYLE = {
        position: 'fixed',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        backgroundColor: 'rgb(0, 0, 0, 0.7)',
        zIndex: '1000'
    }

    const MODAL_STYLE = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '150px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        color: 'black'
    }

    if (isOpen){
        return (
            <div className="product-modal-container" style={BACKGROUND_STYLE}>
                <div className="product-modal" style={MODAL_STYLE}>
                    <img className="vinyl-cover" src={require(`../../data/placeholders/vinyl/${vinylObject.filename}`)} alt="Vinyl cover" />
                    <span className="vinyl-name">{vinylObject.title}</span>
                    <button onClick={setOpenModal}>Fechar</button>
                </div>
            </div>
        );
    }

    return null;
}

export default ProductModal;
