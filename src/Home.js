import React from 'react';
import './styles/home.css';

const Home = () => {
  const handleLoginRedirect = () => {
    window.location.href = '/login';
  };

  return (
    <div className="home-container">
      <header className="navbar">
        <nav className="navbar-menu">
        </nav>
        <button className="login-button" onClick={handleLoginRedirect}>Iniciar Sesión</button>
      </header>

      <main>
        <h1>Bienvenido a la página principal de mascotas</h1>
      </main>
    </div>
  );
};

export default Home;
