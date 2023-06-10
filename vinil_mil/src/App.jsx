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
