import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";

import LoginPage from './pages/UserAuthentication/LoginPage';
import RegisterPage from './pages/UserAuthentication/RegisterPage';
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';
import ForgotPasswordPage from './pages/UserAuthentication/ForgotPasswordPage';
import ProfilePage from './pages/ProfilePage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import AllProductsPage from './pages/AllProductsPage';
import MenuAdminPage from './pages/MenuAdminPage';
import FinishOrderPage from './pages/FinishOrderPage';
import api from './config';

import user_data from './data/json/users.json';

import './App.css';

function App() {
    const [curUser, setCurUser] = useState();
    const [selectedVinyls, setSelectedVinyls] = useState([]);
    const [allUsers, setAllUsers] = useState(user_data);
    const [allVinyls, setAllVinyls] = useState([]);
    const [isLoadingVinyls, setIsLoadingVinyls] = useState(true);
    const [shoppingCart, setShoppingCart] = useState(new Map());

    useEffect(() => {
        api.get('/vinyl')
        .then(response => {
            setAllVinyls(response.data);
            setIsLoadingVinyls(false);
        })
        .catch(error => {
            console.log(error);
            setIsLoadingVinyls(false);
        });
    }, [])

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
        if (shoppingCart.get(vinylObject._id) === undefined) {
            setShoppingCart(new Map([...shoppingCart, [vinylObject._id, 1]]));

        }
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<LoginPage setCurUser={setCurUser}/>}/>
                <Route path='/register' element={<RegisterPage/>}/>
                <Route path='/home' element={<HomePage curUser={curUser} allVinyls={allVinyls} setSelectedVinyls={updateResults} isLoadingVinyls={isLoadingVinyls} addItemToShoppingCart={addItemToShoppingCart} />}/>
                <Route path='/' element={<HomePage curUser={curUser} allVinyls={allVinyls} setSelectedVinyls={updateResults} isLoadingVinyls={isLoadingVinyls} addItemToShoppingCart={addItemToShoppingCart} />}/>
                <Route path='/search' element={<SearchResultsPage curUser={curUser} allVinyls={allVinyls} selectedVinyls={selectedVinyls} setSelectedVinyls={updateResults} addItemToShoppingCart={addItemToShoppingCart} />}/>
                <Route path='/forgot-password' element={<ForgotPasswordPage allUsers={allUsers}/>}/>
                <Route path='/profile' element={<ProfilePage curUser={curUser} changeData={changeUserData} setCurUser={setCurUser}/>}/>
                <Route path='/shopping-cart' element={<ShoppingCartPage curUser={curUser} allVinyls={allVinyls} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />} />
                <Route path='/products' element={<AllProductsPage curUser={curUser} allVinyls={allVinyls} setSelectedVinyls={updateResults} addItemToShoppingCart={addItemToShoppingCart}/>}/>
                <Route path='/finish-order' element={<FinishOrderPage curUser={curUser} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} allVinyls={allVinyls} setAllVinyls={setAllVinyls}/>}/>
                <Route path='/admin' element={<MenuAdminPage curUser={curUser} allUsers={allUsers} setAllUsers={setAllUsers} allVinyls={allVinyls} setAllVinyls={setAllVinyls} />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
