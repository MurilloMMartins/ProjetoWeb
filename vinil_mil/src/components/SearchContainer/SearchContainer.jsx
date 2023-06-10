import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './SearchContainer.css';

const SearchContainer = ({ allVinyls, setSelectedVinyls }) => {
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();

    const searchValue = event.target.elements.searchBar.value.trim();

    const results = allVinyls.filter((vinyl) =>
      vinyl.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    setSelectedVinyls(results)
    navigate("/search")
  };

  return (
    <div id="nav-search-container">
      <form onSubmit={handleSearch}>
        <div id="nav-search">
          <input id="search-bar" name="searchBar" type="text" placeholder="PESQUISE POR ARTISTA, FAIXA OU ÁLBUM" required/>
          <div id="search-button">
            <button id="search-btn" type="submit">
              <img id="search-bar-img" src={require("../../data/search-icon.png")} alt="Search bar" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchContainer;
