import React from "react";
import { Link } from "react-router-dom";
import "./Coin.css";

const Coin = ({ item }) => {
  
  return <Link to={`/coin/${item.id}`}>Name: {item && item.name}</Link>;
};

export default Coin;
