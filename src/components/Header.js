import React from "react";
import { Link } from "react-router-dom";
import Cart from './Cart'

const Header = (props) => {
    const { cartItems, setCartItems } = props;
    return (
        <header>
            <h1>The Flag Shop</h1>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/catalogue'}>Shop</Link>
                <Cart cartItems={cartItems} setCartItems={setCartItems} />
            </nav>
        </header>
    )
}

export default Header;