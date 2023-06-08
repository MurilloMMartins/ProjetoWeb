import React from 'react';

import 'SearchContainer.css'

function SearchContainer() {
  return (
    <div className="nav-search-container">
        <form>
            <div className="nav-search">
                <input className="search-bar" type="text" placeholder="PESQUISE POR ARTISTA, FAIXA OU ÁLBUM" />
                <div className="search-button">
                    <img id="search-bar-img" src="../../data/search-icon.png" alt="Search bar" />
                </div>
            </div>
        </form>
    </div>
  );
}

export default SearchContainer;
