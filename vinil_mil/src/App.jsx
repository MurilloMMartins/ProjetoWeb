import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";

import LoginPage from './pages/UserAuthentication/LoginPage';
import RegisterPage from './pages/UserAuthentication/RegisterPage';
import HomePage from './pages/HomePage'

import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/register' element={<RegisterPage/>}/>
                <Route path='/home' element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
