import React from 'react';
import Spacer from 'react-spacer';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchContainer from '../../components/SearchContainer/SearchContainer';
import VinylCollection from '../../components/VinylCollection/VinylCollection';
import './HomePage.css';

const HomePage = ({ curUser, allVinyls, selectedVinyls, setSelectedVinyls }) => {
    return (
        <>
            <Header curUser={curUser}/>
            <SearchContainer allVinyls={allVinyls} setSelectedVinyls={setSelectedVinyls}/>
            <h1>Em destaque</h1>
            <h2>Populares e lançamentos</h2>
            <VinylCollection collection={selectedVinyls}/>
            <Footer />
        </>
    );
}
 
export default HomePage;