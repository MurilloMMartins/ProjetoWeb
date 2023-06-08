import React from 'react';
import Spacer from 'react-spacer'

import Header from '../../components/Header';
import Footer from '../../components/Footer'
import SearchContainer from '../../components/SearchContainer'
import 'HomePage.css'

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
 
export default LoginPage;