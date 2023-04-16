import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from '../pages/HomePage';
import Catalogue from "../pages/Catalogue";

const Main = () => {
    return (
        <div className="main">
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/catalogue' element={<Catalogue />} />
                <Route exact path='/shopping-cart' element={<Navigate to='/' replace />} />
            </Routes>
        </div>
    )
}

export default Main;