import React from 'react';

import VinylContainer from '../VinylContainer'

import 'VinylCollection.css'

function VinylCollection() {
  return (
    <div className="item-collection-container" id="highlights-container">
        <ul id="highlighted-vinyls-ul">
            <li>
                <VinylContainer
                    imgSrc="../../data/placeholders/vinyl/vinyl1.jpeg"
                    name="DEVOTOS PUNK REGGAE"
                />
            </li>
            <li>
                <VinylContainer
                    imgSrc="../../data/placeholders/vinyl/vinyl2.jpg"
                    name="BANDA NOVA MALANDRAGEM"
                />
            </li>
            <li>
                <VinylContainer
                    imgSrc="../../data/placeholders/vinyl/vinyl3.jpg"
                    name="O SOM DAS AMÉRICAS 12″ BANDA BLACK RIO"
                />
            </li>
            <li>
                <VinylContainer
                    imgSrc="../../data/placeholders/vinyl/vinyl4.jpeg"
                    name="AUTOINTITULADO - AUTORAMAS"
                />
            </li>
            <li>
                <VinylContainer
                    imgSrc="../../data/placeholders/vinyl/vinyl5.jpg"
                    name="A DANÇA DOS NÃO FAMOSOS 12″ MUNDO LIVRE S.A"
                />
            </li>
            <li>
                <VinylContainer
                    imgSrc="../../data/placeholders/vinyl/vinyl6.jpeg"
                    name="ANTIGAMENTE QUILOMBOS HOJE PERIFERIA 12” VINIL DUPLO Z´ÁFRICA BRASIL"
                />
            </li>
        </ul>
    </div>
  );
}

export default VinylCollection;
