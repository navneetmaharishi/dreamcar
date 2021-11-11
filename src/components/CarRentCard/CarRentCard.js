import { Link } from "react-router-dom";

const CarRentCard = (props) => {
  const { id, make, model, variant, transmissionType, type, expectedPrice } =
    props.car;

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-5 d-flex align-items-center ps-2">
          <img
            src="../images/car/rent/honda-city.jpeg"
            className="img-fluid rounded-start"
            alt={model}
          />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title">
              {make} {model}
            </h5>
            <p className="card-text">
              {type} <span className="mx-2">|</span> {transmissionType}
              <span className="mx-2">|</span> {variant}
            </p>
            <p className="card-text">
              <strong>{expectedPrice}</strong>
            </p>
            <div className="text-end">
              <Link to={`/rentCarSummary/${id}`} className="btn btn-primary w-50">
                Book
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarRentCard;
