import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { coinSliceActions } from "../../store/coinSlice";
import Coin from "../Coin/Coin";
import axios from "axios";
import "./CoinList.css";

const CoinList = () => {
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);
  const coins = useSelector((state) => state.coins.pageList);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=300&page=1&sparkline=false"
      )
      .then((response) => dispatch(coinSliceActions.fetchCoins(response.data)))
      .catch((error) => {
        console.log("error message: ", error.message);
      });
  }, [dispatch]);

  const nextPageHandler = (e) => {
    if (pageNumber === 21) {
      return;
    } else {
      setPageNumber(pageNumber + 1);
      dispatch(coinSliceActions.nextPage(pageNumber));
    }
  };

  const prevPageHandler = (e) => {
    if(pageNumber === 1){
      return
    } else {
      setPageNumber(pageNumber - 1);
      dispatch(coinSliceActions.prevPage(pageNumber))
    }
    
  };
  return (
    <div className="coin-list">
      <div className="coin-container">
        <div className="coin-grid">
          {coins.length > 0 &&
            coins
              .slice(0, 12)
              .map((item) => <Coin key={item.id} item={item} />)}
        </div>
        <div className="grid-controls">
          <button onClick={prevPageHandler}>Prev</button>
          {pageNumber}
          <button onClick={nextPageHandler}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default CoinList;
