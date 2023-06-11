import React from 'react';

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
            <h1 style={{margin: '20px 0px 0px 20px'}}>Em destaque</h1>
            <h2 style={{margin: '0px 0px 0px 20px'}}>Populares e lançamentos</h2>
            <VinylCollection collection={selectedVinyls}/>
            <Footer />
        </>
    );
}
 
export default HomePage;