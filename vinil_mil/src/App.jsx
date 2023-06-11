import React, { useState } from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";

import LoginPage from './pages/UserAuthentication/LoginPage';
import RegisterPage from './pages/UserAuthentication/RegisterPage';
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';

import './App.css';
import ForgotPasswordPage from './pages/UserAuthentication/ForgotPasswordPage';

import allVinyls from './data/json/vinyls.json';
import users from './data/json/users.json';
import ProfilePage from './pages/ProfilePage';

function App() {
    const [curUser, setCurUser] = useState();
    const [selectedVinyls, setSelectedVinyls] = useState([]);
    const [allUsers, setAllUsers] = useState(users);

    // temporary solution while there's no server and no database
    const vinylHighlights = allVinyls.slice(0, 6);

    function updateResults(results) {
        setSelectedVinyls(results);
    }

    function createUser(newUser) {
        setAllUsers(users => [...users, newUser]);
        setCurUser(newUser);
    }

    function changeUserData(curUser, newUserData) {
        setAllUsers(allUsers.filter(user => user.email !== curUser.email));
        createUser(newUserData);

        alert("Informações alteradas!");
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<LoginPage setCurUser={setCurUser} allUsers={allUsers}/>}/>
                <Route path='/register' element={<RegisterPage allUsers={allUsers} createUser={createUser}/>}/>
                <Route path='/home' element={<HomePage curUser={curUser} allVinyls={allVinyls} selectedVinyls={vinylHighlights} setSelectedVinyls={updateResults}/>}/>
                <Route path='/search' element={<SearchResultsPage curUser={curUser} allVinyls={allVinyls} selectedVinyls={selectedVinyls} setSelectedVinyls={updateResults}/>}/>
                <Route path='/forgot-password' element={<ForgotPasswordPage allUsers={allUsers}/>}/>
                <Route path='/profile' element={<ProfilePage curUser={curUser} changeData={changeUserData} setCurUser={setCurUser}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
