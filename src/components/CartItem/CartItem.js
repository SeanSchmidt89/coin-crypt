import React from "react";
import { useDispatch } from "react-redux";
import { cartSliceActions } from "../../store/cartSlice";
import { Link } from "react-router-dom";
import "./CartItem.css";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(cartSliceActions.removeItem(item.id));
  };

  const increaseQuantityHandler = (e) => {
    dispatch(cartSliceActions.increaseQuantity(item.id));
  };

  const decreaseQuantityHandler = (e) => {
    dispatch(cartSliceActions.decreaseQuantity(item.id));
  };

  return (
    <div className="cart-item">
      <h2>
        <Link className="coin-title" to={`/coin/${item.id}`}>
          {item.id.toUpperCase()}
        </Link>
        <span className="market-cap-rank">#{item.marketCapRank}</span>
      </h2>
      <div className="lower">
        {/* LEFT SIDE OF LOWER ITEM */}
        <div className="left">
          <p>{item.symbol.toUpperCase()}</p>
          <p>Price: ${item.price}</p>
          <p>Qauntity: {item.quantity}</p>
          <p>Total: ${item.totalCost.toLocaleString()}</p>
          <button onClick={removeItemHandler}>Remove From Cart</button>
        </div>
        {/* RIGHT SIDE OF LOWER ITEM */}
        <div className="right">
          <Link to={`/coin/${item.id}`}>
            <img src={item.image} alt={item.id} />
          </Link>
          <div className="add-sub-btns">
            <button onClick={decreaseQuantityHandler}>-</button>
            <p>{item.quantity}</p>
            <button onClick={increaseQuantityHandler}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
