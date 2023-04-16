import React, { useState } from "react";
import { useCartItemsContext } from "./CartItemsContext";

function setArray(array, setCartItems, setUniqueItems) {
    setCartItems(array);
    setUniqueItems(Array.from(new Set(array)));
}

const CartItemCards = () => {
    const { cartItems, setCartItems } = useCartItemsContext();
    const [uniqueItems, setUniqueItems] = useState(Array.from(new Set(cartItems)));

    //To do: sort array by alphabet & total & checkout button
    let decrementItem = (itemTitle) => {
        let index = cartItems.findIndex(val => val.title === itemTitle);
        let newCart = [...cartItems];
        newCart.splice(index, 1);
        setArray(newCart, setCartItems, setUniqueItems);
    }

    let incrementItem = (itemTitle) => {
        let index = cartItems.findIndex(val => val.title === itemTitle);
        let newCart = cartItems.concat([cartItems[index]]);
        setArray(newCart, setCartItems, setUniqueItems);
    }

    return (
        <div id="cart-item-div">
            {uniqueItems.map((card) => {
                let count = cartItems.filter(value => value.title === card.title).length;
                return (
                    <div className="cart-item" key={card.id} item-name={card.title}>
                        <img src={card.src} alt={card.title}></img>
                        <div className="card-info">
                            <h1>{card.title}</h1>
                            <h2>{card.price}</h2>
                        </div>
                        <div className="quantity-div">
                            <button className="decrementor" onClick={() => (decrementItem(card.title))}>-</button>
                            <div className="quantity">{count}</div>
                            <button className="incrementor" onClick={() => (incrementItem(card.title))}>+</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CartItemCards;