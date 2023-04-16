import { createContext, useContext, useState } from "react";

const CartItemsContext = createContext({
    cartItems: undefined,
    setCartItems: undefined,
});

const CartItemsProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    return (
        <CartItemsContext.Provider
            value={{ cartItems, setCartItems }}
        >
            {children}
        </CartItemsContext.Provider>
    )
}
const useCartItemsContext = () => useContext(CartItemsContext)

export { useCartItemsContext, CartItemsProvider };