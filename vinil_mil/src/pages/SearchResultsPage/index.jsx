import React from 'react';
import Spacer from 'react-spacer';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchContainer from '../../components/SearchContainer/SearchContainer';
import VinylCollection from '../../components/VinylCollection/VinylCollection';
import './SearchResultsPage.css';

const SearchResultsPage = ({ allVinyls, selectedVinyls, setSelectedVinyls }) => {

    return (
        <>
            <Header />
            <SearchContainer allVinyls={allVinyls} setSelectedVinyls={setSelectedVinyls}/>
            <h1>Resultados da busca:</h1>
            <VinylCollection collection={selectedVinyls}/>
            <Footer />
        </>
    );
}
 
export default SearchResultsPage;