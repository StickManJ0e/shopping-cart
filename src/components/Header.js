import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to={'/'}>Home</Link>
            <Link to={'/catalogue'}>Catalogue</Link>
        </header>
    )
}

export default Header;