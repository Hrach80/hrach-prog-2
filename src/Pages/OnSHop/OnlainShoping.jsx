import React, { useEffect, useState } from "react";
import "../OnSHop/OnSHop.css";
import initialComputers from "../../Components/data/data";
import { FaShoppingCart, FaTrash, FaStar, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Computers = () => {
    const [computers, setComputers] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();

    const bech = () => {
        navigate("http://localhost:5177/"); 
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsActive(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        setComputers(initialComputers);
    }, []);

    const handleRate = (id, newRating) => {
        const updatedComputers = computers.map(pc =>
            pc.id === id ? { ...pc, rating: newRating } : pc
        );
        setComputers(updatedComputers);
    };

    const handleToggleCart = (id) => {
        const updatedComputers = computers.map(pc =>
            pc.id === id ? { ...pc, inCart: !pc.inCart } : pc
        );
        setComputers(updatedComputers);
    };

    return (
        <div className={`computers-page ${isActive ? 'active' : ''}`}>
            <h1>Համակարգիչների վաճառք</h1>
            <div className="computers-list">
                {computers.map(pc => (
                    <div key={pc.id} className="computer-card">
                        <img src={pc.image} alt={pc.name} />
                        <h2>{pc.name}</h2>
                        <p className="comp-text">{pc.description}</p>
                        <p><strong>Գինը:</strong> ${pc.price}</p>
                        <div className="rating">
                            {[1, 2, 3, 4, 5].map(star => (
                                <span
                                    key={star}
                                    className={`star ${star <= pc.rating ? 'filled' : ''}`}
                                    onClick={() => handleRate(pc.id, star)}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                        <button
                            className={`cart-button ${pc.inCart ? 'in-cart' : ''}`}
                            onClick={() => handleToggleCart(pc.id)}
                        >
                            {pc.inCart ? (
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
            <button className="Bec-home" onClick={bech}>
                <FaArrowLeft />
                Գլխավոր էջ
            </button>
        </div>
    );
};

export default Computers;