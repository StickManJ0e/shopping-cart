import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/HomePage';
import Catalogue from "../pages/Catalogue";

const Main = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/catalogue' element={<Catalogue />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Main;