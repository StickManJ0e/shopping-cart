import React, { useState, useEffect } from "react";
import CartMenu from "./CartMenu";

const Cart = (props) => {
    const [openCart, setOpenCart] = useState(false);
    const { cartItems, setCartItems } = props;

    return (
        <div>
            <div className="cart-button" onClick={() => setOpenCart(true)}>Cart</div>
            <CartMenu
                openCart={openCart}
                setOpenCart={setOpenCart}
                cartItems={cartItems}
                setCartItems={setCartItems}
            />
        </div>
    )
}

export default Cart;