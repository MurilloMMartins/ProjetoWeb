import React from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchContainer from '../../components/SearchContainer/SearchContainer';
import VinylCollection from '../../components/VinylCollection/VinylCollection';
import './HomePage.css';

const HomePage = ({ curUser, allVinyls, selectedVinyls, setSelectedVinyls, addItemToShoppingCart }) => {
    const navigate = useNavigate();

    return (
        <>
            <Header curUser={curUser}/>
            <SearchContainer allVinyls={allVinyls} setSelectedVinyls={setSelectedVinyls}/>
            <h1 style={{margin: '20px 0px 0px 20px'}}>Em destaque</h1>
            <h2 style={{margin: '0px 0px 0px 20px'}}>Populares e lançamentos</h2>
            <VinylCollection curUser={curUser} collection={selectedVinyls} addItemToShoppingCart={addItemToShoppingCart}/>
            <div id="all-products-button-div">
                <button id="all-products-button" onClick={() => navigate('/products')}>Ver tudo</button>
            </div>
            <Footer />
        </>
    );
}
 
export default HomePage;