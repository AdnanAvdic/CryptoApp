import "../styles/MainComponent.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import DetailsComponent from "./DetailsComponent";

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
        <div className="name-wrapper">
          <img src={element.image} alt="crypto-img" className="crypto-logo" />
          <h2>{element.name}</h2> <h2 className="symbol">{element.symbol}</h2>
        </div>
        <div className="small-wrapper">
          <p className="current-price">${element.current_price}</p>
        </div>
        <div className="small-wrapper">
          <p className="market-cap">${element.market_cap}</p>
        </div>
        <div className="small-wrapperr">
          {element.total_supply === null ? (
            <p>No cap</p>
          ) : (
            <p className="supply-cap">
              {element.total_supply}
              {element.symbol}
            </p>
          )}
        </div>
        <div className="price-wrapper">
          <p className="highest-price">
            ${element.high_24h} <span>24h%</span>
          </p>
          <p className="lowest-price">
            ${element.low_24h} <span>24h%</span>
          </p>
        </div>
        <div>
          <Link to={`/details/${element.id}`}>
            <button>See more</button>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
            <div className="crypto-wrapper">
              <div className="details-wrapper">
                <p>Name</p>
                <p>Price</p>
                <p>Market cap</p>
                <p>Total supply</p>
                <p>High / Low</p>
                <p></p>
              </div>
              {cryptoCoins}
            </div>
          </div>
        </Route>

        <Route path="/details/:cryptoId">
          <DetailsComponent crypto={crypto} />
        </Route>
      </Switch>
    </Router>
  );
}

export default MainComponent;
