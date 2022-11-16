import React from "react";
import CoinList from "../../components/CoinList/CoinList";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="home">
        <CoinList />
      </div>
    </div>
  );
};

export default Home;
