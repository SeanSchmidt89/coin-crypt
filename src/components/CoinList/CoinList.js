import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { coinSliceActions } from "../../store/coinSlice";
import Coin from "../Coin/Coin";
import axios from "axios";
import "./CoinList.css";

const CoinList = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins.coins);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=1&sparkline=false"
      )
      .then((response) => dispatch(coinSliceActions.fetchCoins(response.data)))
      .catch((error) => {
        console.log("error message: ", error.message);
      });
  }, [dispatch]);

  useEffect(() => {
    console.log(coins);
  }, [coins]);
  return (
    <div>
      CoinList
      {coins.length > 0 &&
        coins.map((item) => <Coin key={item.id} item={item} />)}
    </div>
  );
};

export default CoinList;
