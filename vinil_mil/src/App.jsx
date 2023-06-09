import React, { useState } from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";

import LoginPage from './pages/UserAuthentication/LoginPage';
import RegisterPage from './pages/UserAuthentication/RegisterPage';
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';

import './App.css';

function App() {

    const allVinyls = [
        {
            "title": "DEVOTOS PUNK REGGAE",
            "filename": "vinyl1.jpeg"
        },
        {
            "title": "BANDA NOVA MALANDRAGEM",
            "filename": "vinyl2.jpg"
        },
        {
            "title": "O SOM DAS AMÉRICAS 12″ BANDA BLACK RIO",
            "filename": "vinyl3.jpg"
        },
        {
            "title": "AUTOINTITULADO - AUTORAMAS",
            "filename": "vinyl4.jpeg"
        },
        {
            "title": "A DANÇA DOS NÃO FAMOSOS 12″ MUNDO LIVRE S.A",
            "filename": "vinyl5.jpg"
        },
        {
            "title": "ANTIGAMENTE QUILOMBOS HOJE PERIFERIA 12” VINIL DUPLO Z´ÁFRICA BRASIL",
            "filename": "vinyl6.jpeg"
        },
        {
            "title": "ANTIGAMENTE HOJE EM DIA E AMANHÃ",
            "filename": "vinyl6.jpeg"
        },
        {
            "title": "OS ANTIGOS POVOS DA AMÉRICA",
            "filename": "vinyl6.jpeg"
        }
    ];

    const vinylHighlights = allVinyls.slice(0, 6);

    const [selectedVinyls, setSelectedVinyls] = useState([]);

    function updateResults(results) {
        console.log(results);
        setSelectedVinyls(results);
        console.log(selectedVinyls);
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/register' element={<RegisterPage/>}/>
                <Route path='/home' element={<HomePage allVinyls={allVinyls} selectedVinyls={vinylHighlights} setSelectedVinyls={updateResults}/>}/>
                <Route path='/search' element={<SearchResultsPage allVinyls={allVinyls} selectedVinyls={selectedVinyls} setSelectedVinyls={updateResults}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
