import { Link } from "react-router-dom";
import "./car-buy-card.scss";

const CarBuyCard = (props) => {
  const { id, make, model, variant, transmissionType, type, expectedPrice } =
    props.car;
  return (
    <div className="card mb-4">
      <img
        src="../images/car/rent/honda-city.jpeg"
        className="card-img-top buy-car-img"
        alt={model}
      />
      <div className="card-body">
        <hr/>
        <h5 className="card-title">
          {make} {model}
        </h5>
        <p className="card-text">
          Details : <span className="me-3">{type}</span>
          <span className="me-3">{variant}</span>
          <span>{transmissionType}</span>
        </p>
        <p className="card-text">
          Price : <strong>{expectedPrice}</strong>
        </p>
        <div className="text-end">
          <Link to={`/buyCarSummary/${id}`} className="btn btn-primary w-25">
            Buy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarBuyCard;
