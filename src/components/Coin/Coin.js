import React from "react";
import { Link } from "react-router-dom";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import "./Coin.css";

const Coin = ({ item }) => {
  return (
    <Link to={`/coin/${item.id}`}>
      <div className="coin">
        <div className="img-container">
          <img src={item.image} alt={item.title} />
        </div>
        <h3 className="name">{item && item.name}</h3>
        <p className="price">${item.current_price.toLocaleString()}</p>
        {item.price_change_percentage_24h > 0 ? (
          <div className="price-change-pos-container">
            <span>
              <FaArrowCircleUp size={12} />
            </span>
            <p className="price-change-pos">
              {item.price_change_percentage_24h.toFixed(2)}%
            </p>
          </div>
        ) : (
          <div className="price-change-neg-container">
            <span>
              <FaArrowCircleDown size={12} />
            </span>
            <p className="price-change-neg">
              {item.price_change_percentage_24h.toFixed(2)}%
            </p>
          </div>
        )}
      </div>
    </Link>
  );
};

export default Coin;

