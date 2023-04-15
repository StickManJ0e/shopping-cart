import React, { useState, useEffect } from "react";
import CartItemCards from "./CartItemCards";
import { Link } from "react-router-dom";

const CartMenu = (props) => {
    const { openCart, setOpenCart, cartItems, setCartItems } = props;
    const [cartTotal, setCartTotal] = useState();
    const [cartEmpty, setCartEmpty] = useState(<div id="cart-item-div">Your bag is empty</div>);
    const [cartButton, setCartButton] = useState(<div>Browse Products</div>);

    useEffect(() => {
        let cartBackdrop = document.querySelector('#cart-backdrop');

        if (openCart === true) {
            document.addEventListener('click', (e) => {
                if (cartBackdrop === e.target) {
                    setOpenCart(false);
                }
            })
        }
    })

    //Only acts if detects changes to cartItems
    useEffect(() => {
        if (cartItems.length) {
            setCartEmpty(<CartItemCards cartItems={cartItems} setCartItems={setCartItems} />);

            let total = cartItems.reduce((accumulator, current) => accumulator + parseFloat(current.price), 0);
            setCartTotal(total);

            setCartButton(<div className="checkout-button">Checkout</div>);
        }

        else {
            setCartEmpty(<div id="cart-item-div">Your bag is empty</div>);
            setCartTotal();
            setCartButton(<Link to={'/catalogue'} className="browse-product-button" onClick={() => setOpenCart(false)}>Browse Products</Link>);
        }

    }, [cartItems])

    if (openCart === true) {
        return (
            <div>
                <div id="cart-backdrop">
                </div>
                <div id="cart-div">
                    <button onClick={() => setOpenCart(false)}>x</button>
                    <h1>Shopping Cart</h1>
                    {cartEmpty}
                    {cartTotal}
                    {cartButton}
                </div>
            </div>
        )
    }
}

export default CartMenu;