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

  return (
    <div>
      <h1>Crypto Price Tracker</h1>

      <div className="crypto-wrapper">
        <div className="main-wrapper">
          <h2>{crypto[0].name}</h2>
          <p>{crypto[0].high_24h}$</p>
        </div>

        <div className="main-wrapper">
          <h2>{crypto[1].name}</h2>
          <p>{crypto[1].high_24h}$</p>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
