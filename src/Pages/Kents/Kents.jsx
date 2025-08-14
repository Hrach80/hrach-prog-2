import React, { useEffect, useState } from "react";
import "../Kents/Kents.css";
import initialKents from "../../Components/data/initialKents";
import { FaShoppingCart, FaTrash, FaStar, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Kents = () => {
    const [kents, setKents] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsActive(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        setKents(initialKents);
    }, []);

    const handleRate = (id, newRating) => {
        const updatedKents = kents.map(item =>
            item.id === id ? { ...item, rating: newRating } : item
        );
        setKents(updatedKents);
    };

    const handleToggleCart = (id) => {
        const updatedKents = kents.map(item =>
            item.id === id ? { ...item, inCart: !item.inCart } : item
        );
        setKents(updatedKents);
    };

    const handleGoBack = () => {
        navigate("/");
    }

    return (
        <div className={`kents-page ${isActive ? 'active' : ''}`}>
            <h1 className="kents-h1">Կենցաղային տեխնիկա</h1>
            <div className="kents-list">
                {kents.map(item => (
                    <div key={item.id} className="kents-card">
                        <img src={item.image} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p className="kents-text">{item.description}</p>
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
            <button className="Bec-home" onClick={handleGoBack}>
                <FaArrowLeft />
                Գլխավոր էջ
            </button>
        </div>
    );
};

export default Kents;