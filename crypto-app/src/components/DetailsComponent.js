import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "../styles/DetailsComponent.css";
import priceTag from "../images/price-tag.png";

function DetailsComponent(props) {
  const { cryptoId } = useParams();
  const backBtn = useHistory();

  function returnOnInvestment({ percentage }) {
    return percentage;
  }

  const singleCrypto = props.crypto.find((e) => e.id === cryptoId);
  const {
    name,
    symbol,
    image,
    current_price,
    total_supply,
    market_cap,
    market_cap_rank,
    market_cap_change_percentage_24h,
    low_24h,
    high_24h,
    last_updated,
    circulating_supply,
    price_change_24h,
    ath,
    ath_change_percentage,
    atl,
    atl_change_percentage,
    roi,
  } = singleCrypto;

  return (
    <div className="main-container">
      <button className="back-button" onClick={() => backBtn.goBack()}>
        Back
      </button>

      <div className="container">
        <div className="hero-container">
          <div className="sub-hero-title-container">
            <img src={image} alt="full-img" />
            <h1 className="crypto-name">{name}</h1>
            <span>|</span>
            <p className="crypto-symbol">{symbol}</p>
          </div>

          <div className="sub-hero-price-container">
            <img src={priceTag} alt="..." /> ${current_price}
          </div>
        </div>

        <h2 className="subtitle">Full details </h2>

        <div className="details">
          <div>
            <p>Lowest price 24h% {low_24h}</p>
          </div>
          <div>
            <p>Highest price 24h% {high_24h}</p>
          </div>

          <div>
            <p>All time high: ${ath}</p>
          </div>

          <div>
            <p>ATH change precentage: {ath_change_percentage}%</p>
          </div>

          <div>
            <p>All time low: ${atl}</p>
          </div>

          <div>
            <p>ATL change precentage: {atl_change_percentage}%</p>
          </div>

          <div>
            <p>
              Total supply: {total_supply === null ? "No cap" : total_supply}
            </p>
          </div>

          <div>
            <p>Market cap rank: {market_cap_rank}</p>
          </div>

          <div>
            <p>Market cap: ${market_cap}</p>
          </div>

          <div>
            <p>Market cap change in 24h: {market_cap_change_percentage_24h}%</p>
          </div>

          <div>
            <p>Last updated: {last_updated}</p>
          </div>

          <div>
            <p>Circulating supply: {circulating_supply}</p>
          </div>

          <div>
            <p>Price change in 24h: ${price_change_24h}</p>
          </div>

          <div>
            {roi != null ? (
              <p>Return on investment: ${returnOnInvestment(roi)}</p>
            ) : (
              <p>Return on investment: No info</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsComponent;
