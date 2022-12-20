import React, { useState } from "react";
import "./PriceConverter.css";

const PriceConverter = ({ coin }) => {
  const [dollar, setDollar] = useState(0);
  const [crypto, setCrypto] = useState(0);
  const [isValidCoin, setIsValidCoin] = useState(true);
  const [isValidDollar, setIsValidDollar] = useState(true);
  const cyptoInputHandler = (e) => {
    if (/[a-z]/gi.test(e.target.value)) {
      setIsValidDollar(true);
      setIsValidCoin(false);
      return;
    }
    setIsValidCoin(true);
    setCrypto(e.target.value);
    setDollar(e.target.value * coin.market_data.current_price.usd);
  };

  const dollarInputHandler = (e) => {
    if (/[a-z]/gi.test(e.target.value)) {
      setIsValidCoin(true);
      setIsValidDollar(false);
      return;
    }
    setIsValidDollar(true);
    setDollar(e.target.value);
    setCrypto(e.target.value / coin.market_data.current_price.usd);
  };
  return (
    <div className="price-converter">
      <h3>{coin.symbol ? coin.symbol.toUpperCase() : null} to USD Converter</h3>
      <div className="input-container">
        <p>{coin.symbol ? coin.symbol.toUpperCase() : null}</p>
        <input
          onChange={cyptoInputHandler}
          value={crypto}
          style={{
            outlineColor: isValidCoin ? "rgb(75, 209, 149)" : "red",
            background: isValidCoin ? "transparent" : "salmon",
          }}
        />
        <input
          onChange={dollarInputHandler}
          value={dollar}
          style={{
            outlineColor: isValidDollar ? "rgb(75, 209, 149)" : "red",
            background: isValidDollar ? "transparent" : "salmon",
          }}
        />
        <p>USD</p>
      </div>
      {isValidCoin ? null : <p>Please enter a number</p>}
      {isValidDollar ? null : <p>Please enter a number</p>}
      {dollar ? (
        <p>
          {crypto || dollar} {coin.symbol.toUpperCase()} = $
          {dollar.toLocaleString()} USD
        </p>
      ) : null}
    </div>
  );
};

export default PriceConverter;
