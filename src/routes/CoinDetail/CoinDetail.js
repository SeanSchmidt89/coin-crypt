import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { coinSliceActions } from "../../store/coinSlice";
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
  return (
    <div className="coin-detail">
      <div className="name">{coin.id && <p>{coin.id}</p>}</div>
      <div>{coin.market_data && <p>${coin.market_data.current_price.usd.toLocaleString()}</p>}</div>
    </div>
  )
};

export default CoinDetail;
