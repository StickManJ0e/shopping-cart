import React from "react";
import ItemData from "../data/ItemData";

const Catalogue = (props) => {
    const { cartItems, setCartItems } = props;

    let addToCart = (item) => {
        let newCart = (cartItems.concat([item])).sort((a, b) => a.title !== b.title ? a.title < b.title ? -1 : 1 : 0)
        setCartItems(newCart);
    }

    return (
        <div>
            <div className="product-card-grid">
                {ItemData.map((card) => {
                    return (
                        <div className="product-card" key={card.id} id={card.id}>
                            <img src={card.src} alt={card.title}></img>
                            <figcaption>
                                <p>{card.title}</p>
                                <p>${card.price}</p>
                                <button onClick={() => addToCart(card)}>Add To Cart</button>
                            </figcaption>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Catalogue;