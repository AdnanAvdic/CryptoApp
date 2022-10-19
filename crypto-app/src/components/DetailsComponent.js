import { useParams } from "react-router-dom";
import "../styles/DetailsComponent.css";

function DetailsComponent(props) {
  const { cryptoId } = useParams();

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
      <button className="back-button">Back</button>
      <div className="container">
        <img src={image} alt="full-img" />

        <h1 className="crypto-name">{name}</h1>

        <p className="crypto-symbol">{symbol}</p>

        <div className="price-container">
          <div>{current_price}</div>
          <div>{low_24h}</div>
          <div>{high_24h}</div>
        </div>

        <p>{total_supply}</p>
      </div>
    </div>
  );
}

export default DetailsComponent;
