import React from "react";
import { BsFileArrowUpFill, BsFileArrowDownFill } from "react-icons/bs";
import "./Prices.css";

const Prices = ({ coin }) => {
  let twoFour = coin.market_data
    ? coin.market_data.price_change_percentage_24h
    : null;
  let seven = coin.market_data
    ? coin.market_data.price_change_percentage_7d
    : null;
  let fourteen = coin.market_data
    ? coin.market_data.price_change_percentage_14d
    : null;
  let thirty = coin.market_data
    ? coin.market_data.price_change_percentage_30d
    : null;
  let year = coin.market_data
    ? coin.market_data.price_change_percentage_1y
    : null;
  return (
    <div className="prices">
      <h3>
        {coin.symbol ? coin.symbol.toUpperCase() : null} PRICE STATISTICS (USD)
      </h3>
      <p>
        Current Price:
        <span>
          $
          {coin.market_data
            ? coin.market_data.current_price.usd.toLocaleString()
            : null}
        </span>
      </p>
      <p>
        Market Cap:
        <span>
          $
          {coin.market_data
            ? coin.market_data.market_cap.usd.toLocaleString()
            : null}
        </span>
      </p>
      <p>
        24h High/Low:
        <span>
          $
          {coin.market_data
            ? coin.market_data.high_24h.usd.toLocaleString()
            : null}{" "}
          / $
          {coin.market_data
            ? coin.market_data.low_24h.usd.toLocaleString()
            : null}
        </span>
      </p>
      <p>
        24Hr Change
        <span
          className={!coin.market_data ? null : twoFour > 0 ? "green" : "red"}
        >
          {twoFour ? twoFour.toFixed(2) : null}%{" "}
          {twoFour > 0 ? <BsFileArrowUpFill /> : <BsFileArrowDownFill />}
        </span>
      </p>
      <p>
        7d Change
        <span
          className={!coin.market_data ? null : seven > 0 ? "green" : "red"}
        >
          {seven ? seven.toFixed(2) : null}%{" "}
          {seven > 0 ? <BsFileArrowUpFill /> : <BsFileArrowDownFill />}
        </span>
      </p>
      <p>
        14d Change
        <span
          className={!coin.market_data ? null : fourteen > 0 ? "green" : "red"}
        >
          {fourteen ? fourteen.toFixed(2) : null}%{" "}
          {fourteen > 0 ? <BsFileArrowUpFill /> : <BsFileArrowDownFill />}
        </span>
      </p>
      <p>
        30d Change
        <span
          className={!coin.market_data ? null : thirty > 0 ? "green" : "red"}
        >
          {thirty ? thirty.toFixed(2) : null}%{" "}
          {thirty > 0 ? <BsFileArrowUpFill /> : <BsFileArrowDownFill />}
        </span>
      </p>
      <p>
        1 Year Change
        <span className={!coin.market_data ? null : year > 0 ? "green" : "red"}>
          {year ? year.toFixed(2) : null}%{" "}
          {year > 0 ? <BsFileArrowUpFill /> : <BsFileArrowDownFill />}
        </span>
      </p>
      <p>
        Total Supply
        <span>{coin.market_data ? coin.market_data.total_supply : null}</span>
      </p>
      <p>
        Circulating Supply
        <span>
          {coin.market_data ? coin.market_data.circulating_supply : null}
        </span>
      </p>
    </div>
  );
};

export default Prices;
