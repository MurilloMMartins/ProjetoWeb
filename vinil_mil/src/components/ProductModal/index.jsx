import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductModal.css';

function ProductModal({ isOpen, setOpenModal, vinylObject, addItemToShoppingCart }) {
  const navigate = useNavigate();
  const addToShoppingCart = () => {
    addItemToShoppingCart(vinylObject);
    navigate('/shopping-cart');
  }

  if (isOpen) {
    return (
      <div className="product-modal-container">
        <div className="product-modal">
          <img
            className="vinyl-cover"
            src={require(`../../data/placeholders/vinyl/${vinylObject.cover_filename}`)}
            alt="Vinyl cover"
          />
          <div className="details">
            <span className="vinyl-title">{vinylObject.title}</span>
            <span className="vinyl-price">{`Preço: R$${vinylObject.price}.00`}</span>
            <span className="vinyl-available-qty">
              {vinylObject.available_qty > 0
                ? `Em estoque: ${vinylObject.available_qty}`
                : 'Fora de estoque'}
            </span>
            {
              vinylObject.audio_filename !== null ? 
              <audio
                className="vinyl-audio"
                src={require(`../../data/audio-previews/${vinylObject.audio_filename}`)}
                controls={true}
              />
              :
              <span className='vinyl-unavailable-audio-span'>Prévia indisponível</span>
            }
            
            <div className="button-container">
              <button className='modal-button'
              onClick={addToShoppingCart}
              disabled={vinylObject.available_qty === 0}>
                Comprar
              </button>
              <button className='modal-button' onClick={setOpenModal}>Fechar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default ProductModal;
