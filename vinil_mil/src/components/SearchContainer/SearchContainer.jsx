import React from 'react';

import './SearchContainer.css'

function SearchContainer() {
  return (
    <div id="nav-search-container">
        <form>
            <div id="nav-search">
                <input id="search-bar" type="text" placeholder="PESQUISE POR ARTISTA, FAIXA OU ÁLBUM" />
                <div id="search-button">
                    <img id="search-bar-img" src="../../data/search-icon.png" alt="Search bar" />
                </div>
            </div>
        </form>
    </div>
  );
}

export default SearchContainer;
