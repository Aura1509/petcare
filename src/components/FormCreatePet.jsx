import React, { useState } from 'react';
import '../styles/form.css'


const PetForm = () => {
    // Estados para cada campo del formulario
    const [formData, setFormData] = useState({
        nombre: '',
        especie: '',
        raza: '',
        edad: '',
        descripcion: ''
    });

    // Maneja cambios en los campos de entrada
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Maneja el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario:', formData);
        // Aquí puedes agregar la lógica para enviar el formulario al servidor
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='box-input'>
                <label htmlFor="nombre">Nombre:</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='box-input'>
                <label htmlFor="especie">Especie:</label>
                <input
                    type="text"
                    id="especie"
                    name="especie"
                    value={formData.especie}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='box-input'>
                <label htmlFor="raza">Raza:</label>
                <input
                    type="text"
                    id="raza"
                    name="raza"
                    value={formData.raza}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='box-input'>
                <label htmlFor="edad">Edad:</label>
                <input
                    type="number"
                    id="edad"
                    name="edad"
                    value={formData.edad}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='box-input'>
                <label htmlFor="descripcion">Descripción:</label>
                <textarea
                    id="descripcion"
                    name="descripcion"
                    value={formData.descripcion}
                    onChange={handleChange}
                    required
                />
            </div>
            <button className='btn-submit' type="submit">Enviar</button>
        </form>
    );
};

export default PetForm;
