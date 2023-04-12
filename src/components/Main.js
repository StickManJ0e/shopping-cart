import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../pages/HomePage';
import Catalogue from "../pages/Catalogue";

const Main = () => {
    return (
        <div className="main">
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/catalogue' element={<Catalogue />} />
            </Routes>
        </div>
    )
}

export default Main;