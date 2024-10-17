import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/login.css';

const Login = () => {
    const handleLogin = () => {
        // Redirigir al dashboard
        window.location.href = '/Dashboard';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        // Verificar que los campos no estén vacíos
        if (username && password) {
            handleLogin();
            e.target.reset();
        } else {
            alert('Por favor, complete todos los campos.');
        }
    };

    return (
        <div className="login-container" >
            <h2>¡BIENVENIDO!</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Usuario:
                    <input type="text" name="username" />
                </label>
                <label>
                    Contraseña:
                    <input type="password" name="password" />
                </label>
                <button type="submit">Ingresar</button>
                <button type="button">Registrarse</button>
            </form>
        </div>
    );
};

export default Login;
