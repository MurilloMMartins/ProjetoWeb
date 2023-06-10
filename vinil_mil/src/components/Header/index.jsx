import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'

function Header({curUser}) {
  return (
    <header>
      <Link to='/home'>
        <div id="header-left">
          <img id="logo-img" src={require("../../data/logo.png")} alt="Logo Vinil Mil" />
          <span id="logo-span">Vinil Mil</span>
        </div>
      </Link>
      <div id="header-center"></div>
      <div id="header-right">
        <img id="profile-img" src={require("../../data/placeholders/default-profile.png")} alt="Profile" />
        {
          curUser === undefined ? <Link to='/login'><span id="login-span">Entrar/Registrar</span></Link> : <Link to='/profile'><span id="login-span">Olá, {curUser.username}</span></Link>
        }
        <Link to='/shopping-cart'><span id="shopping-cart-span">Carrinho</span></Link>
      </div>
    </header>
  );
}

export default Header;
