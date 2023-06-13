import React, { useEffect } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchContainer from '../../components/SearchContainer/SearchContainer';
import VinylCollection from '../../components/VinylCollection/VinylCollection';

const AllProductsPage = ({ curUser, allVinyls, setSelectedVinyls, addItemToShoppingCart }) => {

    useEffect(() => {
        // scroll to the top before loading page (fixes problem with navigation from HomePage)
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header curUser={curUser}/>
            <SearchContainer allVinyls={allVinyls} setSelectedVinyls={setSelectedVinyls}/>
            <h1 style={{margin: '20px 0px 0px 20px'}}>Todos os produtos:</h1>
            <VinylCollection curUser={curUser} collection={allVinyls} addItemToShoppingCart={addItemToShoppingCart}/>
            <Footer />
        </>
    );
}
 
export default AllProductsPage;