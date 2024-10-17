import React from 'react';
import '../styles/modal.css'

const Modal = ({ isOpen, onClose, children, titleModal }) => {
    if (!isOpen) return null; // No renderiza el modal si no está abierto

    return (
        <div className="modal-overlay">
            <div id='modal-content'>
                <div className="modal-header" >
                    <h3>{ titleModal}</h3>
                    <button className="modal-close" onClick={onClose}>
                        X
                    </button>
                </div>

                {children} {/* Contenido dinámico */}
            </div>
        </div>
    );
};

export default Modal;
