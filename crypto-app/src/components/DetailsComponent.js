import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "../styles/DetailsComponent.css";

function DetailsComponent(props) {
  const { cryptoId } = useParams();
  const backBtn = useHistory();

  const singleCrypto = props.crypto.find((e) => e.id === cryptoId);
  const {
    name,
    symbol,
    image,
    current_price,
    total_supply,
    low_24h,
    high_24h,
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
            <p className="crypto-symbol">{symbol}</p>
          </div>

          <div className="sub-hero-price-container">
            Current price: ${current_price}
          </div>
        </div>

        <div className="price-container">
          <div>Lowest price 24h% {low_24h}</div>
          <div>Highest price 24h% {high_24h}</div>
        </div>

        <p>Total supply: {total_supply}</p>
      </div>
    </div>
  );
}

export default DetailsComponent;
