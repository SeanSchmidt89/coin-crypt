import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { coinSliceActions } from "../../store/coinSlice";
import axios from "axios";
import "./Home.css";

const Home = () => {
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
    console.log(coins)
  }, [coins])
  return <div>Home</div>;
};

export default Home;
