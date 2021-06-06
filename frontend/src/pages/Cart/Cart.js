import './Cart.css'
import CartItem from "../../components/CartIem/CartItem";


const Cart = () => {

    return (
        <div className="cartpage">
           <div className="cartpage__left">
               <h2>Shopping Cart</h2>
               <CartItem />
               <CartItem />
               <CartItem />
               <CartItem />
               <CartItem />
               <CartItem />
           </div>
           <div className="cartpage__right">
               <div className="cartpage__info">
                   <p>Subtotal (0) items</p>
                   <p>$599.99</p>
               </div>
               <div>
                   <button>Proceed To Checkout</button>
               </div>
           </div>
        </div>
    )
}

export default Cart
