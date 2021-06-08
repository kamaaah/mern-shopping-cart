import "./Cart.css";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Components
import CartItem from "../../components/CartItem/CartItem";

// Actions
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";

const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    /*  BecareFull to use Number() and pass item.qty in params, otherwise 
    we have a 0 behind the real number */
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  return (
    <div className="cartpage">
      <div className="cartpage__left">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div>
            Your cart is empty <Link to="/">Go Back</Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.product}
              item={item}
              qtyChangeHandler={qtyChangeHandler}
              removeFromCartHandler={removeFromCartHandler}
            />
          ))
        )}
      </div>
      <div className="cartpage__right">
        <div className="cartpage__info">
          <p>Subtotal ({getCartCount()}) items</p>
          <p>{getCartSubTotal()}</p>
        </div>
        <div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
