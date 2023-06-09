import React from 'react';
import Spacer from 'react-spacer';

import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import SearchContainer from '../../components/SearchContainer/SearchContainer';
import VinylCollection from '../../components/VinylCollection/VinylCollection';
import './HomePage.css';

const HomePage = ({ allVinyls, selectedVinyls, setSelectedVinyls }) => {

    return (
        <>
            <Header />
            <SearchContainer allVinyls={allVinyls} setSelectedVinyls={setSelectedVinyls}/>
            <h1>Em destaque</h1>
            <h2>Populares e lançamentos</h2>
            <VinylCollection collection={selectedVinyls}/>
            <Footer />
        </>
    );
}
 
export default HomePage;