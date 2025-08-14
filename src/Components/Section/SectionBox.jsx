import React, { useState, useEffect, useRef } from 'react';
import { FaLaptop, FaHome, FaTimes, FaPlus, FaCamera, FaCog, FaMobile, FaBars, FaComment, FaEnvelope, FaUser, FaTools } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './SectionBox.css';

export const SectionBox = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleNavigation = (path) => {
        navigate(path);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    return (
        <div className="menu-container" ref={menuRef}>
            <div className={`main-menu-circle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>
            <div className={`sub-menu-circles ${isOpen ? 'open' : ''}`}>
                <div className="sub-menu-circle item-1" onClick={() => handleNavigation('/computers')}>
                    <FaLaptop size={50} />
                </div>
                <div className="sub-menu-circle item-2" onClick={() => handleNavigation('/electronics')}>
                    <FaHome size={50} />
                </div>
                <div className="sub-menu-circle item-4" onClick={() => handleNavigation('/photography')}>
                    <FaCamera size={50} />
                </div>
                <div className="sub-menu-circle item-5" onClick={() => handleNavigation('/settings')}>
                    <FaCog size={50} />
                </div>
                <div className="sub-menu-circle item-6" onClick={() => handleNavigation('/mobile')}>
                    <FaMobile size={50} />
                </div>
                <div className="sub-menu-circle item-7" onClick={() => handleNavigation('/messages')}>
                    <FaComment size={50} />
                </div>
                <div className="sub-menu-circle item-8" onClick={() => handleNavigation('/email')}>
                    <FaEnvelope size={50} />
                </div>
                <div className="sub-menu-circle item-9" onClick={() => handleNavigation('/profile')}>
                    <FaUser size={50} />
                </div>
            </div>
        </div>
    );
};