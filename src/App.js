// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';      // Asegúrate de que la ruta sea correcta
import Login from './Login';    // Asegúrate de que la ruta sea correcta
import Dashboard from './Dashboard'; // Asegúrate de que la ruta sea correcta
import Inventory from './Inventory';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </div>
  );
};

export default App;
