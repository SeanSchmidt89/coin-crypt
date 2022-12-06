import React from "react";
import { useSelector } from "react-redux";
import CoinList from "../../components/CoinList/CoinList";
import CoinRows from "../../components/CoinRows/CoinRows";
import imgOne from "../../assets/Images/img1.jpg";
import "./Home.css";

const Home = () => {
  const coin = useSelector((state) => state.coins.pageList[0])
  return (
    <div>
      <div className="home">
        <div className="img-one-container">
          <img className="img-one" src={imgOne} alt='bitcoin' />
        </div>
        <p>coin: {coin && coin.name}</p>
        <CoinList />
        <CoinRows />
      </div>
    </div>
  );
};

export default Home;
