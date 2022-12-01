import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { coinSliceActions } from "../../store/coinSlice";
import { cartSliceActions } from "../../store/cartSlice";
import axios from "axios";
import "./CoinDetail.css";
import { useParams } from "react-router-dom";

const CoinDetail = () => {
  const [dollar, setDollar] = useState(null);
  const [crypto, setCrypto] = useState(null);
  const dispatch = useDispatch();
  const coin = useSelector((state) => state.coins.coinDetail);
  const { id } = useParams();
  const url = `https://api.coingecko.com/api/v3/coins/${id}`;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => dispatch(coinSliceActions.coinDetail(response.data)))
      .catch((error) => console.log("Error:", error.message));
  }, [dispatch, url]);

  const buyHandler = (e) => {
    const item = {
      id: coin.id,
      symbol: coin.symbol,
      image: coin.image.small,
      marketCapRank: coin.market_cap_rank,
      price: coin.market_data.current_price.usd,
      quantity: 1,
      totalCost: coin.market_data.current_price.usd,
    };
    dispatch(cartSliceActions.addItem(item));
  };

  const cyptoInputHandler = (e) => {
    setCrypto(e.target.value);
    setDollar(e.target.value * coin.market_data.current_price.usd)
  };

  const dollarInputHandler = (e) => {
    setDollar(e.target.value);
    setCrypto(e.target.value / coin.market_data.current_price.usd)
  };
  return (
    <div className="coin-detail">
      {/*top header of coin detail */}
      <div className="title">
        <h1>
          {coin.name ? coin.name.toUpperCase() : null}
          <span className="symbol">
            {coin.symbol ? coin.symbol.toUpperCase() : null}
          </span>
          <span className="rank">
            Rank #{coin.market_cap_rank ? coin.market_cap_rank : null}
          </span>
        </h1>
      </div>
      {/* MIDDLE SECTION */}
      <div className="middle-container">
        {/* table for prices */}
        <div className="prices">
          <h3>
            {coin.symbol ? coin.symbol.toUpperCase() : null} PRICE STATISTICS
            (USD)
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
              className={
                !coin.market_data
                  ? null
                  : coin.market_data.price_change_percentage_24h > 0
                  ? "green"
                  : "red"
              }
            >
              {coin.market_data
                ? coin.market_data.price_change_percentage_24h.toFixed(2)
                : null}
              %
            </span>
          </p>
          <p>
            7d Change
            <span
              className={
                !coin.market_data
                  ? null
                  : coin.market_data.price_change_percentage_7d > 0
                  ? "green"
                  : "red"
              }
            >
              {coin.market_data
                ? coin.market_data.price_change_percentage_7d.toFixed(2)
                : null}
              %
            </span>
          </p>
          <p>
            14d Change
            <span
              className={
                !coin.market_data
                  ? null
                  : coin.market_data.price_change_percentage_14d > 0
                  ? "green"
                  : "red"
              }
            >
              {coin.market_data
                ? coin.market_data.price_change_percentage_14d.toFixed(2)
                : null}
              %
            </span>
          </p>
          <p>
            30d Change
            <span
              className={
                !coin.market_data
                  ? null
                  : coin.market_data.price_change_percentage_30d > 0
                  ? "green"
                  : "red"
              }
            >
              {coin.market_data
                ? coin.market_data.price_change_percentage_30d.toFixed(2)
                : null}
              %
            </span>
          </p>
          <p>
            1 Year Change
            <span
              className={
                !coin.market_data
                  ? null
                  : coin.market_data.price_change_percentage_1y > 0
                  ? "green"
                  : "red"
              }
            >
              {coin.market_data
                ? coin.market_data.price_change_percentage_1y.toFixed(2)
                : null}
              %
            </span>
          </p>
          <p>
            Total Supply
            <span>
              {coin.market_data ? coin.market_data.total_supply : null}
            </span>
          </p>
          <p>
            Circulating Supply
            <span>
              {coin.market_data ? coin.market_data.circulating_supply : null}
            </span>
          </p>
        </div>
        <div className="middle-right">
          <div className="img-box">
            {coin.image ? <img src={coin.image.large} alt={coin.id} /> : null}
          </div>
          <div className="price-converter">
            <h3>
              {coin.symbol ? coin.symbol.toUpperCase() : null} to USD Converter
            </h3>
            <div className="input-container">
              <p>{coin.symbol ? coin.symbol.toUpperCase() : null}</p>
              <input onChange={cyptoInputHandler} value={crypto} />
              <input onChange={dollarInputHandler} value={dollar} />
              <p>USD</p>
            </div>
            {dollar ? (
              <p>
                {crypto || dollar} {coin.symbol.toUpperCase()} is equal to ${dollar.toLocaleString()} USD
              </p>
            ) : null}
          </div>
        </div>
      </div>
      {/* PARAGRAPH OF INFO ABOUT COIN */}
      <div className="description">
        <p>{coin.description ? coin.description.en : null}</p>
      </div>
    </div>
  );
};

export default CoinDetail;
