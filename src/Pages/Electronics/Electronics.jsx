import React, { useEffect, useState } from "react";
import "../Electronics/Elektronics.css";
import initialElectronics from "../../Components/data/initialElectronics";
import { FaShoppingCart, FaTrash, FaStar, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Electronics = () => {
    const [electronics, setElectronics] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsActive(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        setElectronics(initialElectronics);
    }, []);

    const handleRate = (id, newRating) => {
        const updatedElectronics = electronics.map(item =>
            item.id === id ? { ...item, rating: newRating } : item
        );
        setElectronics(updatedElectronics);
    };

    const handleToggleCart = (id) => {
        const updatedElectronics = electronics.map(item =>
            item.id === id ? { ...item, inCart: !item.inCart } : item
        );
        setElectronics(updatedElectronics);
    };

    return (
        <div className={`electronics-page ${isActive ? 'active' : ''}`}>
            <h1 className="elec-h1">Էլեկտրոնիկա</h1>
            <div className="electronics-list">
                {electronics.map(item => (
                    <div key={item.id} className="electronics-card">
                        <img src={item.image} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p className="elec-text">{item.description}</p>
                        <p><strong>Գինը:</strong> ${item.price}</p>
                        <div className="rating">
                            {[1, 2, 3, 4, 5].map(star => (
                                <FaStar
                                    key={star}
                                    className={`star ${star <= item.rating ? 'filled' : ''}`}
                                    onClick={() => handleRate(item.id, star)}
                                />
                            ))}
                        </div>
                        <button
                            className={`cart-button ${item.inCart ? 'in-cart' : ''}`}
                            onClick={() => handleToggleCart(item.id)}
                        >
                            {item.inCart ? (
                                <>
                                    <FaTrash /> Հեռացնել զամբյուղից
                                </>
                            ) : (
                                <>
                                    <FaShoppingCart /> Ավելացնել զամբյուղ
                                </>
                            )}
                        </button>
                    </div>
                ))}
            </div>
            <button className="Bec-home" onClick={() => navigate("http://localhost:5177/")}>
                <FaArrowLeft />
                Գլխավոր էջ
            </button>
        </div>
    );
};

export default Electronics;