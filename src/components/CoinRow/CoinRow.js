import React from "react";
import "./CoinRow.css";

const CoinRow = ({ item }) => {
  return (
    <div className="row">
      <div className="name">
        {item.image ? <img src={item.image} alt={item.id} /> : null}
        {item.id ? item.id.toUpperCase() : null}
      </div>
      <p className="price">
        $
        {item.current_price
          ? item.current_price.toLocaleString()
          : null}
      </p>
      <p className="symbol">{item.symbol ? item.symbol.toUpperCase() : null}</p>
      <p className="24hr">
        $
        {item.price_change_percentage_24h
          ? item.price_change_percentage_24h.toLocaleString()
          : null}
      </p>
      <p className="market-cap">
        $
        {item.market_cap
          ? item.market_cap.toLocaleString()
          : null}
      </p>
      <p className="add-btn">+ CART</p>
    </div>
  );
};

export default CoinRow;
