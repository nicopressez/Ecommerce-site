import { PropTypes } from "prop-types";
import { cart, subtotal } from "./utils/cart";

const CartModal = ({showCart, setShowCart}) => {
    return (
        <div className="font-futura absolute right-36 h-68 w-48 top-20">
        <dialog open className=" overflow-scroll p-3 h-96 w-72 bg-white rounded-lg
         border-2">
            <button className="absolute"onClick={() => setShowCart(!showCart)}>X</button>
            <p className=" text-right">Subtotal: {subtotal}€</p>
            <hr className="mt-2 border-black border-1"></hr>
        <div className="flex flex-wrap">
            {cart.map((item, i) => (
                <div className=" pt-4"key={i}>
                    <img src={item.img} className="mr-3 float-left inline object-cover h-20 w-20"></img>
                    <p className="inline text-sm font-bold">{item.name}</p>
                    <p className=" text-sm ">{item.price}€</p>
                    <p className="text-sm">Quantity: {item.quantity}</p>
                    {item.size ? <p className="text-sm">Size: {item.size}</p> : null}
                </div>
            ))

            }
            <button className="bg-black text-white font-futuramedium
                pl-16 pr-16 mt-3 ml-auto mr-auto pt-1 pb-1 text-xl   ">Checkout</button>
        </div>

        </dialog>
        </div>
    )
}

CartModal.propTypes = {
    showCart: PropTypes.bool,
    setShowCart: PropTypes.func,
}

export default CartModal