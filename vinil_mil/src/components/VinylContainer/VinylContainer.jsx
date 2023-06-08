import React from 'react';

import 'VinylContainer.css'

function VinylContainer({ imgSrc, name}) {
  return (
    <div className="vinyl-container" id="highlighted-vinyl-1">
        <img className="vinyl-cover" src={imgSrc} alt="Vinyl cover" />
        <span className="vinyl-name">{name}</span>
    </div>
  );
}

export default VinylContainer;
