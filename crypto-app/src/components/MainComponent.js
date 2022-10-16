import "../styles/MainComponent.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const baseURL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=30&page=1&sparkline=false";

function MainComponent() {
  const [crypto, setCrypto] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCrypto(response.data);
    });
  }, []);

  if (!crypto) return null;

  const cryptoCoins = crypto.map((element) => {
    return (
      <div className="main-wrapper" key={element.id}>
        <div className="img-name-wrapper">
          <img src={element.image} alt="crypto-img" className="crypto-logo" />
          <h2>{element.name}</h2>
        </div>

        <p className="current-price">{element.current_price}$</p>

        <div className="price-wrapper">
          <p className="highest-price">
            {element.high_24h}$ <span>24h%</span>
          </p>
          <p className="lowest-price">
            {element.low_24h}$ <span>24h%</span>
          </p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1>Crypto Price Tracker</h1>
      <div className="crypto-wrapper">
        <div className="details-wrapper">
          <p>Name</p>
          <p>Price</p>
          <p>Highest price/ Lowest Price</p>
        </div>
        {cryptoCoins}
      </div>
    </div>
  );
}

export default MainComponent;
