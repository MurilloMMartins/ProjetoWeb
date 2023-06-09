import React from 'react';
import Spacer from 'react-spacer'

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
import SearchContainer from '../../components/SearchContainer/SearchContainer'
import VinylCollection from '../../components/VinylCollection/VinylCollection';
import './HomePage.css'

const HomePage = () => {
    return (
        <>
            <Header />
            <SearchContainer />
            <h1>Em destaque</h1>
            <h2>Populares e lançamentos</h2>
            <VinylCollection />
            <Footer />
        </>
    );
}
 
export default HomePage;