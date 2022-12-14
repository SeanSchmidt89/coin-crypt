import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { coinSliceActions } from "../../store/coinSlice";
import { cartSliceActions } from "../../store/cartSlice";
import axios from "axios";
import PriceConverter from "../../components/PriceConverter/PriceConverter";
import Prices from "../../components/Prices/Prices";
import { useParams } from "react-router-dom";
import "./CoinDetail.css";

const CoinDetail = () => {
  const dispatch = useDispatch();
  const coin = useSelector((state) => state.coins.coinDetail);
  const { id } = useParams();
  const [amount, setAmount] = useState(0);
  const [purchaseMessage, SetPurchaseMessage] = useState(" ");
  const url = `https://api.coingecko.com/api/v3/coins/${id}`;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => dispatch(coinSliceActions.coinDetail(response.data)))
      .catch((error) => console.log("Error:", error.message));
  }, [dispatch, url]);

  const upAmountHandler = (e) => {
    setAmount(amount + 1);
  };

  const downAmountHandler = (e) => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  const buyHandler = (e) => {
    const item = {
      id: coin.id,
      symbol: coin.symbol,
      image: coin.image.small,
      marketCapRank: coin.market_cap_rank,
      price: coin.market_data.current_price.usd,
      quantity: amount,
      totalCost: coin.market_data.current_price.usd,
    };
    dispatch(cartSliceActions.addItem(item));
    setAmount(0);
    SetPurchaseMessage(`${amount} ${coin.symbol.toUpperCase()} added to Cart`);
    setTimeout(() => SetPurchaseMessage(" "), 2800);
  };

  return (
    <div className="coin-detail">
      {/* TOP SECTION */}
      {/*top header of coin detail */}
      <div className="title">
        <h1>
          {coin.name ? coin.name.toUpperCase() : null}
          <span className="symbol">
            {coin.symbol ? coin.symbol.toUpperCase() : null}
          </span>
          <span className="rank">
            Rank #{coin.market_cap_rank ? coin.market_cap_rank : null}
          </span>
        </h1>
      </div>
      {/*  TOP SECTION */}
      {/* MIDDLE SECTION */}
      <div className="middle-container">
        {/* table for prices */}
        <Prices coin={coin} />
        <div className="middle-right">
          <div className="img-box">
            {coin.image ? <img src={coin.image.large} alt={coin.id} /> : null}
          </div>
          <PriceConverter coin={coin} />
        </div>
      </div>
      {/* MIDDLE SECTION */}
      {/* BOTTOM SECTION */}
      <div className="buy-container">
        <h3>Purchase {coin.name}</h3>
        <div className="amount-btns">
          <button onClick={downAmountHandler}>-</button>
          <p>{amount}</p>
          <button onClick={upAmountHandler}>+</button>
        </div>
        <div className="buy-btns">
          <button onClick={buyHandler}>Purchase</button>
          <Link to="/cart">
            <button>View Cart</button>
          </Link>
        </div>
        <p className="purchaseSuccessful">{purchaseMessage}</p>
      </div>
      {/* paragraph of coin info*/}
      <div className="description">
        <p>{coin.description ? coin.description.en : null}</p>
      </div>
      {/* BOTTOM SECTION */}
    </div>
  );
};

export default CoinDetail;
