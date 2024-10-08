import React from 'react';
import './styles/dashboard.css';

const Dashboard = () => {
    const handleHomeRedirect = () => {
        window.location.href = '/';
    };

    return (
        <div className="home-container">
            <header className="navbar1">
                <nav className="navbar-menu">
                </nav>
                <button className="login-button" onClick={handleHomeRedirect}>Salir</button>
            </header>
            <main>
                <h1>Bienvenido al panel de control de la aplicación de mascotas.</h1>
            </main>
        </div>
    );
};


export default Dashboard;
