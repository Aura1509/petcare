// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const handleHomeRedirect = () => {
  window.location.href = '/';
};

const Navbar = () => {
  return (
    <header className="navbar1">
      <nav className="navbar-menu">
      </nav>
      <button className="login-button" onClick={handleHomeRedirect}>Salir</button>
    </header>
  );
};

export default Navbar;
