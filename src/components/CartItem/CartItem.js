import React from "react";
import "./CartItem.css";

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <p>Coin: {item.id}</p>
      <p>Price: ${item.price}</p>
      <p>Qauntity: {item.quantity}</p>
      <p>Total: ${item.totalCost}</p>
    </div>
  );
};

export default CartItem;
