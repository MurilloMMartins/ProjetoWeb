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
          <input id="search-bar" name="searchBar" type="text" required/>
          <div id="search-button-container">
            <button id="search-button" type="submit">
              <img id="search-bar-img" src={require("../../data/search-icon.png")} alt="Search bar" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchContainer;
