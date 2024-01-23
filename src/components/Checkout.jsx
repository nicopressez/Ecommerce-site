import { useContext, useState } from "react";
import checkoutImg from "../assets/images/hero.jpg";
import { CartContext } from "./CartContext";

const Checkout = () => {
  const {
    cart,
    setCart,
    subtotal,
    setSubtotal,
    setProducts,
    removeItem,
    editQuantity,
  } = useContext(CartContext);
  const [orderComplete, setOrderComplete] = useState(false);

  const finishOrderHandler = () => {
    setCart([]);
    setSubtotal(0);
    setProducts(0);
    setOrderComplete(true);
  };

  return (
    <div className="bg-black min-h-screen">
      <img
        src={checkoutImg}
        className="absolute z-0 w-full h-2/5 object-cover"
      ></img>
      <div
        className="bg-gradient-to-t from-black pt-96 font-futura
      drop-shadow-2xl text-white"
      >
        <h1 className=" w-screen absolute top-40 text-center tracking-[16px] text-5xl">
          SHOPPING CART
        </h1>
      </div>
      {!orderComplete ? (
        <>
          <hr className=" ml-auto mr-auto w-2/3 border-gray-700"></hr>
          <div className="text-white flex flex-col ml-52 font-futura">
            {cart.map((item, i) => (
              <div key={i} className="mb-5 mt-5">
                <img
                  src={item.img}
                  className=" float-left object-cover w-40 h-52 mr-8"
                ></img>

                <h3 className=" mt-12 text-sm">{item.brand}</h3>
                <h2 className="text-xl font-bold inline">{item.name}</h2>
                <div className="ml-96 inline">
                  Quantity:
                  <select
                    className="  bg-black focus:outline-none"
                    onChange={(e) => editQuantity(item, e.target.value)}
                  >
                    <option selected disabled>
                      {item.quantity}
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <p
                  onClick={() => removeItem(item)}
                  className="inline ml-4 text-xl cursor-pointer"
                >
                  &#10006;
                </p>

                <h2>{item.price}€</h2>
                {item.size && (
                  <h3 className="mt-4 text-sm">Size: {item.size}</h3>
                )}
              </div>
            ))}
          </div>
          <div className=" text-center absolute font-futura bg-white h-96 w-80 top-96 mt-6 right-60">
            <h1 className=" text-xl mt-6 mb-6">ORDER SUMMARY</h1>
            <hr className=" ml-2 mr-2 border-gray-500"></hr>
            <h2 className="mt-4 mb-4">Subtotal: {subtotal}€</h2>
            <h2 className="mb-4">Shipping: 15€</h2>
            <h2 className="mb-4">Tax: {((subtotal * 5) / 100).toFixed(2)}€</h2>
            <h2 className=" font-bold text-xl mb-4">
              Total: {(subtotal + 15 + (subtotal * 5) / 100).toFixed(2)}€
            </h2>
            <hr className=" ml-2 mr-2 border-gray-500"></hr>
            <button
              className="font-bold pl-4 pr-4 pt-1 pb-1 text-2xl bg-black text-white mt-6"
              onClick={finishOrderHandler}
            >
              COMPLETE ORDER
            </button>
          </div>{" "}
        </>
      ) : (
        <div
          className="ml-auto mr-auto w-1/2 mt-5 pt-24 pb-24
         text-center text-white font-futura border-2 border-white"
        >
          <h1 className="text-4xl tracking-wide">ORDER COMPLETE &#10003;</h1>
          <p className="text-sm">Order nr. #LG78ER3F</p>
        </div>
      )}
    </div>
  );
};

export default Checkout;
