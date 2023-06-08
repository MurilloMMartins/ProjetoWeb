import React from 'react';

import 'Header.css'

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
        <img id="profile-img" src="../../data/placeholders/default-profile.png" alt="Profile picture" />
        <a href="login.html"><span id="login-span">Entrar/Registrar</span></a>
        <a href="shopping-cart.html"><span id="shopping-cart-span">Carrinho</span></a>
      </div>
    </header>
  );
}

export default Header;
