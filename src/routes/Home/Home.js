import React from "react";
import { useSelector } from "react-redux";
import CoinList from "../../components/CoinList/CoinList";
import CoinRows from "../../components/CoinRows/CoinRows";
import "./Home.css";

const Home = () => {
  const coin = useSelector((state) => state.coins.pageList);

  return (
    <div>
      <div className="home">
        <div className="img-one"></div>
        {/* body class max width 1250 to center contents of page */}
        <div className="body">
          <p className="test">coin: {coin && coin.name}</p>
          <div className="coin-list-container">
            <CoinList />
          </div>
          <CoinRows />
        </div>
      </div>
    </div>
  );
};

export default Home;
