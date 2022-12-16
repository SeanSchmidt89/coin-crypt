import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartSliceActions } from "../../store/cartSlice";
import { FaCartPlus, FaRegCheckCircle } from "react-icons/fa";
import "./CoinRow.css";
import axios from "axios";

const CoinRow = ({ item }) => {
  const dispatch = useDispatch();
  const [addItem, setAddItem] = useState(false);
  const addCartHandler = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${item.id}`)
      .then((response) => {
        const newItem = {
          id: response.data.id,
          symbol: response.data.symbol,
          image: response.data.image.small,
          marketCapRank: response.data.market_cap_rank,
          price: response.data.market_data.current_price.usd,
          quantity: 1,
          totalCost: response.data.market_data.current_price.usd,
        };
        dispatch(cartSliceActions.addItem(newItem));
      })
      .catch((error) => console.log("Error: ", error.message));
    setAddItem(true);
    setTimeout(() => {
      setAddItem(false);
    }, 150);
  };
  return (
    <Link to={`/coin/${item.id}`}>
      <div className="row">
        <div className="name">
          {item.image ? <img src={item.image} alt={item.id} /> : null}
          {item.id ? item.id.toUpperCase() : null}
        </div>
        <p className="price">
          ${item.current_price ? item.current_price.toLocaleString() : null}
        </p>
        <p className="symbol">
          {item.symbol ? item.symbol.toUpperCase() : null}
        </p>
        <p className="24hr">
          $
          {item.price_change_percentage_24h
            ? item.price_change_percentage_24h.toLocaleString()
            : null}
        </p>
        <p className="market-cap">
          ${item.market_cap ? item.market_cap.toLocaleString() : null}
        </p>
        <p className="add-btn">
          {addItem ? (
            <FaRegCheckCircle size={18} />
          ) : (
            <FaCartPlus onClick={addCartHandler} size={18} />
          )}
        </p>
      </div>
    </Link>
  );
};

export default CoinRow;
