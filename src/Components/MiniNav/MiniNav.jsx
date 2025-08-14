import React, { useState } from 'react';
import { FaShoppingCart, FaUser, FaSearch, FaBell, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './MiniNav.css';

export const MiniNav = () => {
    const navigate = useNavigate();
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleItemClick = (path) => {
        if (!isSearchOpen) {
            navigate(path);
        }
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        setSearchTerm(''); 
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (searchTerm) {
            console.log("Searching for:", searchTerm);
            setSearchTerm('');
            setIsSearchOpen(false);
        }
    };

    return (
        <div className="min-nav">
            <h1 className={`logo ${isSearchOpen ? 'hidden' : ''} log`}>HV</h1>

            <div className="min-nav-box">
                {isSearchOpen ? (
                    <form className="search-form" onSubmit={handleSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Որոնել..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="search-input"
                            autoFocus
                        />
                        <button type="button" className="search-close-btn" onClick={toggleSearch}>
                            <FaTimes />
                        </button>
                    </form>
                ) : (
                    <>
                        <div className="min-nav-item" onClick={toggleSearch}>
                            <FaSearch />
                        </div>
                        <div className="min-nav-item" onClick={() => handleItemClick('/cart')}>
                            <FaShoppingCart />
                        </div>
                        <div className="min-nav-item" onClick={() => handleItemClick('/notifications')}>
                            <FaBell />
                        </div>
                        <div className="min-nav-item" onClick={() => handleItemClick('/profile')}>
                            <FaUser />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};