import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.css'

function Header({curUser}) {
  const [logoSrc, setLogoSrc] = useState(require("../../data/logo.png"));

  const handleMouseEnter = () => {
    setLogoSrc(require("../../data/animated_logo.gif"));
  };

  const handleMouseLeave = () => {
    setLogoSrc(require("../../data/logo.png"));
  };
  return (
    <header>
      <Link to='/home'>
        <div id="header-left" title="Home Page" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img id="logo-img" src={logoSrc} alt="Logo Vinil Mil" />
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
