import React, { useState, useEffect } from "react";
import CartItemCards from "./CartItemCards";
import { Link } from "react-router-dom";
import { useCartItemsContext } from "./CartItemsContext";

const CartMenu = (props) => {
    const { openCart, setOpenCart } = props;
    const { cartItems } = useCartItemsContext();
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
            setCartEmpty(<CartItemCards />);

            let total = cartItems.reduce((accumulator, current) => accumulator + parseFloat(current.price), 0);
            setCartTotal(total.toFixed(2));

            setCartButton(<div className="checkout-button">Checkout</div>);
        }

        else {
            setCartEmpty(<div id="cart-item-div">Your bag is empty</div>);
            setCartTotal();
            setCartButton(<Link exact to={'/catalogue'} className="browse-product-button" onClick={() => setOpenCart(false)}>Browse Products</Link>);
        }

    }, [cartItems, setOpenCart])

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