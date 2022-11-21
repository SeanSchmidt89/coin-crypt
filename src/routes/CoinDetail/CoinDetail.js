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
      price: coin.market_data.current_price.usd,
      quantity: 1,
      totalCost: coin.market_data.current_price.usd,
    };
    dispatch(cartSliceActions.addItem(item));
  };
  return (
    <div className="coin-detail">
      <div className="name">{coin.id && <p>{coin.id}</p>}</div>
      <div>
        {coin.market_data && (
          <p>${coin.market_data.current_price.usd.toLocaleString()}</p>
        )}
      </div>
      <button onClick={buyHandler}>Buy</button>
    </div>
  );
};

export default CoinDetail;
