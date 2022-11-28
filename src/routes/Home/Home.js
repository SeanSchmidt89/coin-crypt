import React from "react";
import CoinList from "../../components/CoinList/CoinList";
import CoinRows from "../../components/CoinRows/CoinRows";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="home">
        <CoinList />
        <CoinRows />
      </div>
    </div>
  );
};

export default Home;
