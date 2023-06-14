import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductModal.css';

function ProductModal({ isOpen, setOpenModal, vinylObject, addItemToShoppingCart, allowItemAddition=true }) {
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
            className="vinyl-cover-modal"
            src={require(`../../data/placeholders/vinyl/${vinylObject.cover_filename !== null ? vinylObject.cover_filename : "default_vinyl.png"}`)}
            alt="Vinyl cover"
          />
          <div className="details">
            <span className="vinyl-title">{vinylObject.title}</span>
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
            <span className="vinyl-price">{`Preço: R$${vinylObject.price}.00`}</span>
            <span className="vinyl-available-qty">
              {vinylObject.available_qty > 0
                ? `Em estoque: ${vinylObject.available_qty}`
                : 'Fora de estoque'}
            </span>
            <div className="button-container">
              {allowItemAddition ?
              <button className='modal-button' onClick={addToShoppingCart} disabled={vinylObject.available_qty === 0}>
                Comprar
              </button>
              : null
              }
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
