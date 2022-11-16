import React from "react";
import "./Coin.css";

const Coin = ({ item }) => {
  return <div>Coin Name: {item && item.name}</div>;
};

export default Coin;
