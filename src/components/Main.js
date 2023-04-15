import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from '../pages/HomePage';
import Catalogue from "../pages/Catalogue";

const Main = (props) => {
    const { cartItems, setCartItems } = props;

    return (
        <div className="main">
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/catalogue'element={<Catalogue cartItems={cartItems} setCartItems={setCartItems} />} />
                <Route path='/shopping-cart' element={<Navigate to='/' replace />}></Route>
            </Routes>
        </div>
    )
}

export default Main;