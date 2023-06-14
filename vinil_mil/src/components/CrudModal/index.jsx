import React, { useState, useEffect } from 'react';

import './CrudModal.css';

function CrudModal({ isOpen, setOpenModal, vinylObject, saveModifications }) {
    const [title, setTitle] = useState(vinylObject !== undefined ? vinylObject.title : '');
    const [price, setPrice] = useState(vinylObject !== undefined ? vinylObject.price : '');
    const [availableQty, setAvailableQty] = useState(vinylObject !== undefined ? vinylObject.available_qty : '');

    useEffect(() => {
        if (vinylObject) {
          setTitle(vinylObject.title);
          setPrice(vinylObject.price);
          setAvailableQty(vinylObject.available_qty);
        } else {
          setTitle('');
          setPrice('');
          setAvailableQty('');
        }
      }, [vinylObject]);

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

    function handleSaveModifications() {
        const strPrice = price.toString();
        const strAvailableQty = availableQty.toString();
        if (strPrice.includes('.') || strPrice === "" || strAvailableQty.includes('.') || strAvailableQty === "") {
            alert("Campos 'preço' e 'quantidade em estoque' devem conter apenas números!");
            return;
        }

        if ([price, availableQty].includes(NaN) || title.trim() === "") {
            alert("Nome do álbum, preço e quantidade em estoque são campos obrigatórios!")
            return;
        }
        
        let updatedVinylObject;
        if (vinylObject !== undefined) {
            updatedVinylObject = {
                ...vinylObject,
                title: title,
                price: price,
                available_qty: availableQty
              };
        } else {
            updatedVinylObject = {
                title: title,
                cover_filename: null,
                audio_filename: null,
                price: price,
                available_qty: availableQty
              };
        }
        saveModifications(updatedVinylObject);

        setOpenModal();
    }

    if (isOpen) {
    return (
        <div className="product-modal-container">
            <div className="product-modal">
                <div className="edit-files-container">
                    <img
                        className="vinyl-cover-modal"
                        src={require(`../../data/placeholders/vinyl/${(vinylObject === undefined || vinylObject.cover_filename === null) ? "default_vinyl.png" : vinylObject.cover_filename}`)}
                        alt="Vinyl cover"
                    />
                    <input type="file" id="vinyl-cover-input" className='file-input-edit-vinyl' onChange={loadImage}></input>
                    <span>Arquivo de áudio:</span>
                    <input type="file" id="audio-preview-input" className='file-input-edit-vinyl' onChange={loadAudio}></input>
                </div>
                <div className="details">
                    <span>Nome do álbum:</span>
                    <input id="vinyl-title-input" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <span>Preço:</span>
                    <input type="number" min="0" id="vinyl-price-input" value={price} onChange={(e) => setPrice(e.target.value)} />
                    <span>Qtd em estoque:</span>
                    <input type="number" min="0" id="vinyl-available-qty-input" value={availableQty} onChange={(e) => setAvailableQty(e.target.value)} />
                    <div className="button-container">
                        <button className='modal-button' onClick={handleSaveModifications}>Salvar</button>
                        <button className='modal-button' onClick={setOpenModal}>Voltar</button>
                    </div>
                </div>
            </div>
        </div>
    );
    }

    return null;
}

export default CrudModal;
