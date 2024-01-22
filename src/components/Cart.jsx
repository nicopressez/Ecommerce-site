import { PropTypes } from "prop-types";
import { cart } from "./utils/cart";

const CartModal = ({showCart, setShowCart}) => {
    return (
        <div className="font-futura absolute right-24 h-68 w-48 top-20">
        <dialog open className=" overflow-scroll p-3 h-96 w-60 bg-white rounded-lg
         border-2">
            <button className="absolute"onClick={() => setShowCart(!showCart)}>X</button>
            <p className=" text-right">Subtotal:</p>
            <hr className="mt-1 border-black border-1"></hr>
        <div className="flex flex-wrap">
            {cart.map((item, i) => (
                <div className=" pt-4"key={i}>
                    <img src={item.img} className="mr-3 float-left inline object-cover h-20 w-20"></img>
                    <p className="inline text-sm font-bold">{item.name}</p>
                    <p className=" text-sm ">{item.price}€</p>
                    <p className="text-sm">Quantity:{item.quantity}</p>
                    {item.size ? <p className="text-sm">Size: {item.size}</p> : null}
                </div>
            ))

            }
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