import React, { useEffect, useState } from "react";
import "../Building/Building.css";
import initialBuilding from "../../Components/data/initialBuilding";
import { FaShoppingCart, FaTrash, FaStar, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 

const Building = () => {
    const [building, setBuilding] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/");
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsActive(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        setBuilding(initialBuilding);
    }, []);

    const handleRate = (id, newRating) => {
        const updatedBuilding = building.map(item =>
            item.id === id ? { ...item, rating: newRating } : item
        );
        setBuilding(updatedBuilding);
    };

    const handleToggleCart = (id) => {
        const updatedBuilding = building.map(item =>
            item.id === id ? { ...item, inCart: !item.inCart } : item
        );
        setBuilding(updatedBuilding);
    };

    return (
        <div className={`building-page ${isActive ? 'active' : ''}`}>
            <h1 className="building-h1">Շինարարական տեխնիկա</h1>
            <div className="building-list">
                {building.map(item => (
                    <div key={item.id} className="building-card">
                        <img src={item.image} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p className="building-text">{item.description}</p>
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

export default Building;