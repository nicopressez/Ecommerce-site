import Header from "./components/header.js";
import { Outlet, useLocation } from "react-router-dom";
import React,{ useEffect, useState } from "react";
import { CartContext } from "./components/CartContext.js";

type ShopItem = {
  name: string;
  img: any; 
  gender: string;
  price: string;
  type: string;
  brand: string;
  color: string;
  description: string;
  size?: string; 
  quantity?: number;
};

type CartItem = {
  name: string;
  img: any; 
  gender: string;
  price: string;
  type: string;
  brand: string;
  color: string;
  description: string;
  size?: string; 
  quantity: number;
};

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [products, setProducts] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [showCart, setShowCart] = useState(false);

  // On page change, smooth scroll back to top
  let location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const addItem = (item:ShopItem, size: string) => {
    if (item.type !== "Accessories" && !size) return;
    const itemExists = cart.filter((element) => element.name === item.name);
    const exactItem = itemExists.find((element) => element.size === size);
    // If element doesn't already exist, create
    if (!itemExists[0]) {
      cart.push({ ...item, quantity: 1, size: size });
      setProducts(products + 1);
      setSubtotal(Number((subtotal + +item.price).toFixed(2)));
    }
    // If element exists and size is same, just add 1 quantity
    else if (exactItem) {
      const foundItem = cart.find((element) => element.name === item.name && element.size === size);
      if (foundItem) {
        if (foundItem.quantity !== undefined) {
          foundItem.quantity += 1;
          setSubtotal(Number((subtotal + +item.price).toFixed(2)));
        }
      }
    }
    // If element exists and size is different, create
    else {
      cart.push({ ...item, quantity: 1, size: size });
      setProducts(products + 1);
      setSubtotal(Number((subtotal + +item.price).toFixed(2)));
    }
    setCart(cart);
  };

  const removeItem = (item: CartItem) => {
    const index = cart.findIndex(
      (element) => element.name === item.name && element.size === item.size,
    );
    cart.splice(index, 1);
    const removedSubtotal = parseFloat(item.price) * item.quantity;
    setSubtotal(Number((subtotal - removedSubtotal).toFixed(2)));
    setProducts(products - 1);
    setCart(cart);
  };

  const editQuantity = (item: CartItem, newQuantity: number) => {
    const index = cart.findIndex(
      (element) => element.name === item.name && element.size === item.size,
    );
    const previousQuantity = cart[index].quantity;
    cart[index].quantity = newQuantity;
    setSubtotal(
      Number(
        (
          subtotal -
          +item.price * previousQuantity +
          +item.price * newQuantity
        ).toFixed(2),
      ),
    );
    setCart(cart);
  };
  return (
    <>
      <CartContext.Provider
        value={{
          cart,
          products,
          subtotal,
          addItem,
          showCart,
          setShowCart,
          removeItem,
          editQuantity,
          setCart,
          setSubtotal,
          setProducts,
        }}
      >
        <Header />
        <Outlet />
      </CartContext.Provider>
    </>
  );
}
