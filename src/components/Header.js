import React from "react";
import { Link } from "react-router-dom";
import Cart from './Cart'

const Header = () => {
    return (
        <header>
            <h1>The Flag Shop</h1>
            <nav>
                <Link to={'/'} exact>Home</Link>
                <Link to={'/catalogue'}>Shop</Link>
                <Cart />
            </nav>
        </header>
    )
}

export default Header;