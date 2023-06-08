import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";

import LoginPage from './pages/UserAuthentication/LoginPage';

import './App.css';
import RegisterPage from './pages/UserAuthentication/RegisterPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/register' element={<RegisterPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
