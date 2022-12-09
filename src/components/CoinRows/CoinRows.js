import React from "react";
import CoinRow from "../CoinRow/CoinRow";
import { useSelector } from "react-redux";
import "./CoinRows.css";

const CoinRows = () => {
  const coins = useSelector((state) => state.coins.coins);
  return (
    <div className="coin-rows">
    <h2 className="coin-list-header">Coin List</h2>
      {/* TOP ROW WITH TITLES */}
      <div className="row-top">
        <p className="name">NAME</p>
        <p className="price">PRICE (USD)</p>
        <p className="symbol">SYMBOL</p>
        <p className="24hr">24H CHANGE</p>
        <p className="market-cap">MARKET-CAP</p>
        <p>ADD TO CART</p>
      </div>
      {/* DYNAMIC DATA OF COINS FOR EACH ROW */}
      {coins.length > 0 &&
        coins.slice(0, 16).map((item) => <CoinRow key={item.id} item={item} />)}
    </div>
  );
};

export default CoinRows;
