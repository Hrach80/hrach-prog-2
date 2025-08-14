
import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import "./Modal.css";

const Modal = ({ show, handleClose }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Գրանցման տվյալներ:", formData);
        handleClose(); 
    };

    return (
    
        <div className={`modal-overlay ${show ? 'visible' : ''}`} onClick={handleClose}>
            <div className="modal-content neumorphic-modal" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={handleClose}>&times;</button>
                <h2 className="modal-title">Գրանցում</h2>
                <p className="modal-subtitle">Ստեղծեք ձեր հաշիվը</p>

                <form onSubmit={handleSubmit} className="signup-form">
                    <div className="input-group">
                        <FaUser className="input-icon" />
                        <input
                            type="text"
                            name="username"
                            placeholder="Օգտանուն"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <FaEnvelope className="input-icon" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Էլ. հասցե"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <FaLock className="input-icon" />
                        <input
                            type="password"
                            name="password"
                            placeholder="Գաղտնաբառ"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="neumorphic-btn">
                        Գրանցվել
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Modal;