import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './SearchContainer.css';

const SearchContainer = ({ allVinyls, setSelectedVinyls }) => {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();

    const searchValue = event.target.elements.searchBar.value;

    const results = allVinyls.filter((vinyl) =>
      vinyl.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchResults(results);

    console.log(results)
    setSelectedVinyls(results)
    navigate("/search")
  };

  return (
    <div id="nav-search-container">
      <form onSubmit={handleSearch}>
        <div id="nav-search">
          <input id="search-bar" name="searchBar" type="text" placeholder="PESQUISE POR ARTISTA, FAIXA OU ÁLBUM" required/>
          <div id="search-button">
            <button type="submit">
              <img id="search-bar-img" src="../../data/search-icon.png" alt="Search bar" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchContainer;
