import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
  const cartList = useSelector((state) => state.cart.items);
  const cartTotalPrice = useSelector((state) => state.cart.totalPrice)
  const cartTotalItems = useSelector((state) => state.cart.totalQuantity)
  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      <div className="cart-container">
        <div className="cart-list">
          {cartList.length > 0 &&
            cartList.map((item) => <CartItem key={item.id} item={item} />)}
        </div>
        <div className="cart-info">
          {cartList.length > 0 ? (
            <>
              <h2 className="info-header">Cart Info</h2>
              <p>Specific Coins: <span>{cartList.length}</span></p>
              <p>Total Cart Items: <span>{cartTotalItems}</span></p>
              <p>Cart Total (USD): <span>${cartTotalPrice.toLocaleString()}</span></p>
            </>
          ) : (
            <h2>Your cart is empty</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
