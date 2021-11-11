import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getBuyCarSummary } from "../../actions";

import { Link } from "react-router-dom";

const BuyCarSummary = (props) => {
  const { id } = props.match.params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBuyCarSummary(id));
  }, []);

  const { buyCarSummary } = useSelector(({ buyCar }) => buyCar);

  const {
    city,
    make,
    model,
    variant,
    transmissionType,
    type,
    driven,
    color,
    modelYear,
    expectedPrice,
  } = buyCarSummary.carDetail;

  const { address, email, firstName, lastName } =
    buyCarSummary.userDetail;

  return (
    <div className="app-warpper">
      <div className="page-center">
        <div className="box">
          <h1 className="h1 mb-4">Please confirm booking details</h1>

          <h4 className="h4 mb-3">Owner info</h4>
          <p>
            Name :{" "}
            <strong>
              {firstName} {lastName}
            </strong>
          </p>
          <p>
            Email : <strong>{email}</strong>
          </p>

          <p>
            Address : <strong>{address}</strong>
          </p>

          <hr />
          <h4 className="h4 mb-3">Car info</h4>
          <p className="row">
            <div className="col-6">
              Car :{" "}
              <strong>
                {make} {model}
              </strong>
            </div>

            <div className="col-6">
              City : <strong>{city}</strong>
            </div>
          </p>

          <hr />

          <p className="row">
            <div className="col-6">
              Variant : <strong>{variant}</strong>
            </div>
            <div className="col-6">
              Transmission Type : <strong>{transmissionType}</strong>
            </div>
          </p>

          <p className="row">
            <div className="col-6">
              Type : <strong>{type}</strong>
            </div>
          </p>
          <hr />
          <p className="row">
            <div className="col-6">
              Driven : <strong>{driven}</strong>
            </div>
            <div className="col-6">
              Color : <strong>{color}</strong>
            </div>
          </p>

          <p className="row">
            <div className="col-6">
              Model : <strong>{modelYear}</strong>
            </div>
          </p>

          <hr />

          <h5>Price : {expectedPrice}</h5>

          <div className="text-center mt-4">
            <Link to="/bookingCnf" className="btn btn-primary btn-lg">
              {" "}
              Confirm booking
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyCarSummary;
