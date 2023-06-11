import React from 'react';
import './ProductModal.css';

function ProductModal({ isOpen, setOpenModal, vinylObject }) {
  if (isOpen) {
    return (
      <div className="product-modal-container">
        <div className="product-modal">
          <img
            className="vinyl-cover"
            src={require(`../../data/placeholders/vinyl/${vinylObject.filename}`)}
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
            <img 
              className="play-vinyl-icon"
              src={require('../../data/placeholders/play-button.png')}
              alt="Play vinyl"
            />
            <div className="button-container">
              <button className='modal-button'
              onClick={() => alert('Item adicionado ao carrinho')}
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
