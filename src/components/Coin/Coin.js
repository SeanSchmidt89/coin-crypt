import React from "react";
import { Link } from "react-router-dom";
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
      </div>
    </Link>
  );
};

export default Coin;
