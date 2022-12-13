import React, { useState } from "react";
import CoinRow from "../CoinRow/CoinRow";
import { useSelector, useDispatch } from "react-redux";
import { coinSliceActions } from "../../store/coinSlice";
import "./CoinRows.css";

const CoinRows = () => {
  const dispatch = useDispatch();
  const [rowsNumber, setRowsNumber] = useState(1);
  const coins = useSelector((state) => state.coins.rowsList);

  const prevHandler = () => {
    if (rowsNumber === 0) {
      return;
    } else {
      setRowsNumber(rowsNumber - 1);
      dispatch(coinSliceActions.prevRows(rowsNumber));
    }
  };

  const nextHandler = () => {
    if (rowsNumber === 15) {
      return;
    } else {
      setRowsNumber(rowsNumber + 1);
      dispatch(coinSliceActions.nextRows(rowsNumber));
    }
  };

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
      <button onClick={prevHandler}>prev</button>
      {rowsNumber}
      <button onClick={nextHandler}>next</button>
    </div>
  );
};

export default CoinRows;

