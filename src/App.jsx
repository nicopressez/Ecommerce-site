import Header from "./components/header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { CartContext } from "./components/CartContext";


export default function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [showCart, setShowCart] = useState(false);


 const addItem = (item, size) => {
    if (item.type !== "Accessories" && !size) return;
    const itemExists = cart.filter((element) => element.name === item.name)
    const exactItem = itemExists.find((element) => element.size === size)
    // If element doesn't already exist, create  
    if (!itemExists[0])
    {cart.push({...item, quantity:1, size:size});
    setProducts(products + 1)
    setSubtotal(subtotal + +item.price)
    }  
    // If element exists and size is same, just add 1 quantity
    else  if (exactItem) {
    cart.filter((element) => element.name === item.name)
    .find((element) => element.size === size).quantity += 1;
    setSubtotal(subtotal + +item.price)}
    // If element exists and size is different, create 
    else 
    {cart.push({...item, quantity:1, size:size});
    setProducts(products + 1);
    setSubtotal(subtotal + +item.price)
}
    setCart(cart)
}

const removeItem = (item) => {
  const index = cart.findIndex( (product) => { product == item });
  cart.splice(index, 1);
  setSubtotal(subtotal - item.price * item.quantity);
  setProducts(products - 1)
  setCart(cart);
}
  return (
    <>
    <CartContext.Provider value={{ cart, products, subtotal, addItem,showCart, setShowCart, removeItem }}>
      <Header />
      <Outlet />
    </CartContext.Provider>
    </>
  );
}
