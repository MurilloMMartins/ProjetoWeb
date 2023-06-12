import React, { useState } from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";

import LoginPage from './pages/UserAuthentication/LoginPage';
import RegisterPage from './pages/UserAuthentication/RegisterPage';
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';
import ForgotPasswordPage from './pages/UserAuthentication/ForgotPasswordPage';
import ProfilePage from './pages/ProfilePage';
import ShoppingCartPage from './pages/ShoppingCartPage';

import allVinyls from './data/json/vinyls.json';
import users from './data/json/users.json';

import './App.css';
import AllProductsPage from './pages/AllProductsPage';

function App() {
    const [curUser, setCurUser] = useState();
    const [selectedVinyls, setSelectedVinyls] = useState([]);
    const [allUsers, setAllUsers] = useState(users);
    const [shoppingCart, setShoppingCart] = useState(new Map());

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

    function addItemToShoppingCart(vinylObject) {
        if (shoppingCart.get(vinylObject.id) === undefined) {
            setShoppingCart(new Map([...shoppingCart, [vinylObject.id, 1]]));
        }
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<LoginPage setCurUser={setCurUser} allUsers={allUsers}/>}/>
                <Route path='/register' element={<RegisterPage allUsers={allUsers} createUser={createUser}/>}/>
                <Route path='/home' element={<HomePage curUser={curUser} allVinyls={allVinyls} selectedVinyls={vinylHighlights} setSelectedVinyls={updateResults} addItemToShoppingCart={addItemToShoppingCart} />}/>
                <Route path='/' element={<HomePage curUser={curUser} allVinyls={allVinyls} selectedVinyls={vinylHighlights} setSelectedVinyls={updateResults} addItemToShoppingCart={addItemToShoppingCart} />}/>
                <Route path='/search' element={<SearchResultsPage curUser={curUser} allVinyls={allVinyls} selectedVinyls={selectedVinyls} setSelectedVinyls={updateResults} addItemToShoppingCart={addItemToShoppingCart} />}/>
                <Route path='/forgot-password' element={<ForgotPasswordPage allUsers={allUsers}/>}/>
                <Route path='/profile' element={<ProfilePage curUser={curUser} changeData={changeUserData} setCurUser={setCurUser}/>}/>
                <Route path='/shopping-cart' element={<ShoppingCartPage curUser={curUser} allVinyls={allVinyls} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />} />
                <Route path='/products' element={<AllProductsPage curUser={curUser} allVinyls={allVinyls} setSelectedVinyls={updateResults} addItemToShoppingCart={addItemToShoppingCart}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
