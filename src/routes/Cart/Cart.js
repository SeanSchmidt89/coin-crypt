import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
  const cartList = useSelector((state) => state.cart.items);
  const cartTotalPrice = useSelector((state) => state.cart.totalPrice);
  const cartTotalItems = useSelector((state) => state.cart.totalQuantity);
  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {cartList.length > 0 ? (
        <div className="cart-container">
          {/* LEFT SIDE OF CART (ITEMS LIST)*/}
          <div className="cart-list">
            {cartList.length > 0 &&
              cartList.map((item) => <CartItem key={item.id} item={item} />)}
          </div>
          {/* RIGHT SIDE OF CART (CART INFO) */}
          <div className="cart-info">
            <h2 className="info-header">Cart Info</h2>
            <p>
              Specific Coins: <span>{cartList.length}</span>
            </p>
            <p>
              Total Cart Items: <span>{cartTotalItems}</span>
            </p>
            <p>
              Cart Total (USD): <span>${cartTotalPrice.toLocaleString()}</span>
            </p>
            <div className="cart-btns">
              <button>CHECKOUT</button>
              <Link to='/'>
                <button>CONTINUE SHOPPING</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p className="empty-cart">Your cart is currently empty...</p>
      )}
    </div>
  );
};

export default Cart;
