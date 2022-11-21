import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
  const cartList = useSelector((state) => state.cart.items);
  return (
    <div className="cart">
      {cartList.length > 0 &&
        cartList.map((item) => <CartItem id={item.id} item={item} />)}
    </div>
  );
};

export default Cart;
