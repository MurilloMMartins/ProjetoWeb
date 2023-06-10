import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

import LoginPage from './pages/UserAuthentication/LoginPage';
import RegisterPage from './pages/UserAuthentication/RegisterPage';
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';

import './App.css';
import ForgotPasswordPage from './pages/UserAuthentication/ForgotPasswordPage';

function App() {
    const [curUser, setCurUser] = useState();
    const [selectedVinyls, setSelectedVinyls] = useState([]);
    const [userMap, setUserMap] = useState(new Map([
        ["gabrielperao@hotmail.com", {
          "username": "Gabriel",
          "password": "senha"
        }],
        ["admin@gmail.com", {
            "username": "Admin",
            "password": "admin"
        }]
    ]));

    // temporary solution while there's no server and no database
    const allVinyls = [
        {
            "title": "DEVOTOS PUNK REGGAE",
            "filename": "vinyl1.jpeg",
            "price": 250,
            "available_qty": 8
        },
        {
            "title": "BANDA NOVA MALANDRAGEM",
            "filename": "vinyl2.jpg",
            "price": 150,
            "available_qty": 5
        },
        {
            "title": "O SOM DAS AMÉRICAS 12″ BANDA BLACK RIO",
            "filename": "vinyl3.jpg",
            "price": 200,
            "available_qty": 4
        },
        {
            "title": "AUTOINTITULADO - AUTORAMAS",
            "filename": "vinyl4.jpeg",
            "price": 180,
            "available_qty": 2
        },
        {
            "title": "A DANÇA DOS NÃO FAMOSOS 12″ MUNDO LIVRE S.A",
            "filename": "vinyl5.jpg",
            "price": 230,
            "available_qty": 10
        },
        {
            "title": "ANTIGAMENTE QUILOMBOS HOJE PERIFERIA 12” VINIL DUPLO Z´ÁFRICA BRASIL",
            "filename": "vinyl6.jpeg",
            "price": 200,
            "available_qty": 1
        },
        {
            "title": "SAMBA MATUTO 1969 – BANDA DE PÍFANOS DE CARUARU",
            "filename": "vinyl7.jpg",
            "price": 150,
            "available_qty": 0 
        },
        {
            "title": "BETO BRUNO – DEPOIS DO FIM",
            "filename": "vinyl8.jpg",
            "price": 170,
            "available_qty": 13
        }
    ];

    const vinylHighlights = allVinyls.slice(0, 6);

    function updateResults(results) {
        setSelectedVinyls(results);
    }

    function createUser(user) {
        const newUser = {
            "username": user.username,
            "password": user.password
        }
        setUserMap(new Map(userMap).set(user.email, newUser));
        setCurUser(newUser);
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<LoginPage setCurUser={setCurUser} userMap={userMap}/>}/>
                <Route path='/register' element={<RegisterPage userMap={userMap} createUser={createUser}/>}/>
                <Route path='/home' element={<HomePage curUser={curUser} allVinyls={allVinyls} selectedVinyls={vinylHighlights} setSelectedVinyls={updateResults}/>}/>
                <Route path='/search' element={<SearchResultsPage curUser={curUser} allVinyls={allVinyls} selectedVinyls={selectedVinyls} setSelectedVinyls={updateResults}/>}/>
                <Route path='/forgot-password' element={<ForgotPasswordPage userMap={userMap}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
