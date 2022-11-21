import React from "react";
import { useDispatch } from "react-redux";
import { cartSliceActions } from "../../store/cartSlice";
import "./CartItem.css";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(cartSliceActions.removeItem(item.id));
  };

  return (
    <div className="cart-item">
      <h2>
        {item.id.toUpperCase()}
        <span className="market-cap-rank">#{item.marketCapRank}</span>
      </h2>
      <div className="lower">
        <div className="left">
          <p>Price: ${item.price}</p>
          <p>Qauntity: {item.quantity}</p>
          <p>Total: ${item.totalCost.toLocaleString()}</p>
          <button onClick={removeHandler}>Remove From Cart</button>
        </div>
        <div className="right">
          <img src={item.image} alt={item.id} />
          <div className="add-sub-btns">
            <button>-</button>
            <p>{item.quantity}</p>
            <button>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
