import React from "react";
import { Link } from "react-router-dom";
import CoinList from "../../components/CoinList/CoinList";
import CoinRows from "../../components/CoinRows/CoinRows";
import SignUpSection from "../../components/SignUpSection/SignUpSection";
import { UserAuth } from "../../context/AuthContext";
import "./Home.css";

const Home = () => {
  const { userName } = UserAuth();
  return (
    <div>
      <div className="home">
        <div className="img-one"></div>
        {/* body class max width 1250 to center contents of page */}
        <div className="body">
          <p className="img-one-text-one">Coin Crypt</p>
          <p className="img-one-text-two">
            - The best site to find all your crypto needs
          </p>
          <p className="img-one-text-three">
            - Pull real time data on all the latest cyrpto coins
          </p>
          <p className="img-one-text-four">
            - Get started and sign up for your free acount now
          </p>
          {!userName && (
            <Link to="/sign-up">
              <button className="img-one-button-signup">Sign up</button>
            </Link>
          )}
          {!userName && (
            <Link to="/login">
              <button className="img-one-button-login">Login</button>
            </Link>
          )}
          <div className="coin-list-container">
            <CoinList />
          </div>
          <CoinRows />
          <SignUpSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
