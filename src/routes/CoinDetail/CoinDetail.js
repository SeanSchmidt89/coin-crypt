import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { coinSliceActions } from "../../store/coinSlice";
import { cartSliceActions } from "../../store/cartSlice";
import axios from "axios";
import "./CoinDetail.css";
import { useParams } from "react-router-dom";

const CoinDetail = () => {
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
  return (
    <div className="coin-detail">
      {/* TOP ROW WITH TITLES */}
      <div className="row-top">
        <p className="name">NAME</p>
        <p className="price">PRICE</p>
        <p className="symbol">SYMBOL</p>
        <p className="24hr">24H CHANGE</p>
        <p className="market-cap">MARKET-CAP</p>
        <p>ADD TO CART</p>
      </div>
      {/* DYNAMIC DATA OF COINS FOR ROW */}
      <div className="row">
        <div className="name">
          {coin.image ? <img src={coin.image.thumb} alt={coin.id} /> : null}
          {coin.id ? coin.id.toUpperCase() : null}
        </div>
        <p className="price">
          $
          {coin.market_data
            ? coin.market_data.current_price.usd.toLocaleString()
            : null}
        </p>
        <p className="symbol">
          {coin.symbol ? coin.symbol.toUpperCase() : null}
        </p>
        <p className="24hr">
          $
          {coin.market_data
            ? coin.market_data.price_change_24h_in_currency.usd.toLocaleString()
            : null}
        </p>
        <p className="market-cap">
          $
          {coin.market_data
            ? coin.market_data.market_cap.usd.toLocaleString()
            : null}
        </p>
        <p className="add-btn">+ CART</p>
      </div>
      <button onClick={buyHandler}>Add to Cart</button>
    </div>
  );
};

export default CoinDetail;
