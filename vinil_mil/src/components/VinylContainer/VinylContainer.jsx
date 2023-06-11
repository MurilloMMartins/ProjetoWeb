import React from 'react';

import './VinylContainer.css'

function VinylContainer({ vinylObject, onClick}) {
  return (
    <div className="vinyl-container" id="highlighted-vinyl-1">
        <img className="vinyl-cover" src={require(`../../data/placeholders/vinyl/${vinylObject.cover_filename}`)} alt="Vinyl cover" onClick={()=>onClick(vinylObject)}/>
        <span className="vinyl-name">{vinylObject.title}</span>
    </div>
  );
}

export default VinylContainer;
