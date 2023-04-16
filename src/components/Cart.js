import React, { useState } from "react";
import CartMenu from "./CartMenu";

const Cart = () => {
    const [openCart, setOpenCart] = useState(false);

    return (
        <div>
            <div className="cart-button" onClick={() => setOpenCart(true)}>Cart</div>
            <CartMenu
                openCart={openCart}
                setOpenCart={setOpenCart}
            />
        </div>
    )
}

export default Cart;