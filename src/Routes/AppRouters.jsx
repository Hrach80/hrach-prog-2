
import React from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import OnlainShoping from "../Pages/OnSHop/OnlainShoping";
import Electronics from "../Pages/Electronics/Electronics";
import Kents from "../Pages/Kents/Kents";
import Building from "../Pages/Building/Building";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Modal from "../Components/Modal/Modal";

const AppRouters = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isModalPath = location.pathname === "/profile";
    const handleModalClose = () => {
        navigate(-1);
    };

    return (
        <div>
            <Routes>
                <Route path="/Օնլայն Խանութ" element={<OnlainShoping />} />
                <Route path="/Էլեկտրոնիկա" element={<Electronics />} />
                <Route path="/Կենցաղային ապրանքներ" element={<Kents />} />
                <Route path="/Շինանյութ" element={<Building />} />
                <Route path="/Մեր Մասին" element={<AboutUs />} />
            </Routes>

            {isModalPath && (
                <Modal show={isModalPath} handleClose={handleModalClose} />
            )}
        </div>
    );
};

export default AppRouters;