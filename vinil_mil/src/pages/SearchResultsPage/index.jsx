import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchContainer from '../../components/SearchContainer/SearchContainer';
import VinylCollection from '../../components/VinylCollection/VinylCollection';
import './SearchResultsPage.css';

const SearchResultsPage = ({ curUser, allVinyls, selectedVinyls, setSelectedVinyls, addItemToShoppingCart }) => {

    return (
        <>
            <Header curUser={curUser}/>
            <SearchContainer allVinyls={allVinyls} setSelectedVinyls={setSelectedVinyls}/>
            <h1 style={{margin: '20px 0px 0px 20px'}}>Resultados da busca:</h1>
            <VinylCollection curUser={curUser} collection={selectedVinyls} addItemToShoppingCart={addItemToShoppingCart}/>
            <Footer />
        </>
    );
}
 
export default SearchResultsPage;