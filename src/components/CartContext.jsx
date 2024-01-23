import { createContext } from "react";

export const CartContext = createContext({
    cart: [],
    products: 0,
    subtotal: 0,
    addItem: () => {},
    showCart:[],
})