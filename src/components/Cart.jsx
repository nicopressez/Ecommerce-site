import { PropTypes } from "prop-types";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { faTrash} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const CartModal = ({showCart, setShowCart}) => {


    const { subtotal, cart, removeItem} = useContext(CartContext)
    return (
        <div className="font-futura absolute right-36 h-68 w-48 top-20">
        <dialog open className=" transition-all duration-300 overflow-scroll p-3 h-96 w-72 bg-white rounded-lg
         border-2">
            <button className="absolute text-[20px]"onClick={() => setShowCart(!showCart)}>&#10006;</button>
            <p className=" text-right">Subtotal: {subtotal}€</p>
            <hr className="mt-2 border-black border-1"></hr>
        <div className="flex flex-wrap">
            {cart.map((item, i) => (
                <div className=" pt-4"key={i}>
                    <img src={item.img} className="mr-3 float-left inline object-cover h-20 w-20"></img>
                    <p className="inline text-sm font-bold">{item.name}</p>
                    <button onClick={() => removeItem(item)}>
                        <FontAwesomeIcon icon={faTrash} className="ml-2 inline hover:text-red-800"/></button>
                    <p className=" text-sm ">{item.price}€</p>
                    <p className="text-sm">Quantity: {item.quantity}</p>
                    {item.size ? <p className="text-sm">Size: {item.size}</p> : null}
                  
                </div>
            ))

            }
            {cart[0]? 
        
            <button className="bg-black text-white font-futuramedium
                pl-16 pr-16 mt-3 ml-auto mr-auto pt-1 pb-1 text-xl   ">
                    <Link to="/checkout">CHECKOUT</Link></button>

                 :
                <h2 className=" ml-auto mr-auto mt-6 text-xl">No items yet</h2>}
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