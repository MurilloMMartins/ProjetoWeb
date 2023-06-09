import React from 'react';

import './VinylContainer.css'

function VinylContainer({ filename, name}) {
  return (
    <div className="vinyl-container" id="highlighted-vinyl-1">
        <img className="vinyl-cover" src={require(`../../data/placeholders/vinyl/${filename}`)} alt="Vinyl cover" />
        <span className="vinyl-name">{name}</span>
    </div>
  );
}

export default VinylContainer;
