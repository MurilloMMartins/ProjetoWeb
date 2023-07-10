import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchContainer from '../../components/SearchContainer/SearchContainer';
import VinylCollection from '../../components/VinylCollection/VinylCollection';
import './HomePage.css';
import api from '../../config';

const HomePage = ({ curUser, allVinyls, setSelectedVinyls, addItemToShoppingCart }) => {
    const navigate = useNavigate();

    const [highlights, setHighlights] = useState();

    useEffect(() => {
        api.get('/vinyl')
            .then(response => {
                const vinyls = response.data;
                setHighlights(vinyls.slice(0, 6));
            })
    }, [])

    return (
        <>
            <Header curUser={curUser}/>
            <SearchContainer allVinyls={allVinyls} setSelectedVinyls={setSelectedVinyls}/>
            <h1 style={{margin: '20px 0px 0px 20px'}}>Em destaque</h1>
            <h2 style={{margin: '0px 0px 0px 20px'}}>Populares e lançamentos</h2>
            <VinylCollection curUser={curUser} collection={highlights} addItemToShoppingCart={addItemToShoppingCart}/>
            <div id="all-products-button-div">
                <button id="all-products-button" onClick={() => navigate('/products')}>Ver tudo</button>
            </div>
            <Footer />
        </>
    );
}
 
export default HomePage;