import React, { useEffect, useState } from "react";
import "../AboutUs/AboutUs.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
    const [isActive, setIsActive] = useState(false);
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        message: ''
    });
    const navigate = useNavigate();

    const handleClose = () => {
        setIsActive(false);
        setTimeout(() => {
            navigate("/");
        }, 1000);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Ուղարկված հաղորդագրություն:", formValues);
        alert(`Շնորհակալություն, ${formValues.name}! Ձեր հաղորդագրությունը ուղարկված է։`);
        setFormValues({ name: '', email: '', message: '' }); 
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsActive(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`about-us-box ${isActive ? 'active' : ''}`}>
            <button className="close-button" onClick={handleClose}>
                <FaTimes />
            </button>
            <h1>Մեր մասին</h1>
            <p className="company-description">
                Մենք առաջատար ընկերություն ենք, որը մասնագիտացած է որակյալ ապրանքների մատակարարման ոլորտում։ Մեր առաքելությունն է բավարարել մեր հաճախորդների կարիքները՝ առաջարկելով լավագույն լուծումներն ու սպասարկումը։
            </p>

            <div className="contact-section">
                <h2>Կապ մեզ հետ</h2>
                <div className="contact-info">
                    <a className="about-href" href="tel:+37499123456"><FaPhone /> Հեռախոսահամար: +374 99 123456</a>
                    <a className="about-href" href="mailto:info@example.com"><FaEnvelope /> Էլ. փոստ: info@example.com</a>
                    <p><FaMapMarkerAlt /> Հասցե: Օրինակելի փողոց 1, Երևան, Հայաստան</p>
                </div>
            </div>

            <div className="social-media-section">
                <h2>Մեր սոցիալական էջերը</h2>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </div>
            </div>

            <div className="message-section">
                <h2 className="section-title">Ուղարկեք մեզ հաղորդագրություն</h2>
                <form onSubmit={handleFormSubmit} className="neumorphic-form">
                    <div className="form-group">
                        <label htmlFor="name">Անուն</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formValues.name}
                            onChange={handleFormChange}
                            className="neumorphic-input"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Էլ. փոստ</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleFormChange}
                            className="neumorphic-input"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Հաղորդագրություն</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formValues.message}
                            onChange={handleFormChange}
                            className="neumorphic-textarea"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="neumorphic-btn">Ուղարկել</button>
                </form>
            </div>
        </div>
    );
};

export default AboutUs;