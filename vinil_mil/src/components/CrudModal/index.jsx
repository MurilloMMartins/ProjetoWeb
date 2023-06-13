import React from 'react';

import './CrudModal.css';

function CrudModal({ isOpen, setOpenModal, vinylObject, saveModifications }) {

    function loadImage() {
        const fileInput = document.getElementById("vinyl-cover-input");
        const img = document.querySelector(".vinyl-cover-modal");

        const file = fileInput.files[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = function(event) {
            img.src = event.target.result;
            }

            reader.readAsDataURL(file);
        } else {
            alert("Selecione uma imagem válida!");
        }
    }

    function loadAudio() {
        const fileInput = document.getElementById("audio-preview-input");

        const file = fileInput.files[0];
        if (file === undefined || !file.type.startsWith("audio/")) {
            alert("Selecione um arquivo de áudio MP3!");
        }
    }

    if (isOpen) {
    return (
        <div className="product-modal-container">
        <div className="product-modal">
            <div className="edit-files-container">
                <img
                    className="vinyl-cover-modal"
                    src={require(`../../data/placeholders/vinyl/${vinylObject.cover_filename}`)}
                    alt="Vinyl cover"
                />
                <input type="file" id="vinyl-cover-input" className='file-input-edit-vinyl' onChange={loadImage}></input>
                <span>Arquivo de áudio:</span>
                <input type="file" id="audio-preview-input" className='file-input-edit-vinyl' onChange={loadAudio}></input>
            </div>
            <div className="details">
                <span>Nome do álbum:</span>
                <input className="vinyl-title-input" placeholder={vinylObject.title} />
                <span>Preço:</span>
                <input type="number" min="0" className="vinyl-price-input" placeholder={`R$${vinylObject.price}.00`} />
                <span>Qtd em estoque:</span>
                <input type="number" min="0" className="vinyl-available-qty-input" placeholder={vinylObject.available_qty} />
            <div className="button-container">
                <button className='modal-button' onClick={saveModifications}>Salvar</button>
                <button className='modal-button' onClick={setOpenModal}>Fechar</button>
            </div>
            </div>
        </div>
        </div>
    );
    }

    return null;
}

export default CrudModal;
