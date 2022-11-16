import React from "react";
import { Link } from "react-router-dom";
import "./Coin.css";

const Coin = ({ item }) => {
  return (
    <Link to={`/coin/${item.id}`}>
      <div className="coin">Name: {item && item.name}</div>
    </Link>
  );
};

export default Coin;
