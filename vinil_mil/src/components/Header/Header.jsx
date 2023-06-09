import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'

function Header() {
  return (
    <header>
      <a href="homepage.html">
        <div id="header-left">
          <img id="logo-img" src="../../data/logo.png" alt="Logo Vinil Mil" />
          <span id="logo-span">Vinil Mil</span>
        </div>
      </a>
      <div id="header-center"></div>
      <div id="header-right">
        <img id="profile-img" src="../../data/placeholders/default-profile.png" alt="Profile" />
        <Link to='/login'><span id="login-span">Entrar/Registrar</span></Link>
        <Link to='/shopping-cart'><span id="shopping-cart-span">Carrinho</span></Link>
      </div>
    </header>
  );
}

export default Header;
