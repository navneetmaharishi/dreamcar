import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getRentCarSummary } from "../../actions";

import { Link } from "react-router-dom";

const RentCarSummary = (props) => {
  const { id } = props.match.params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRentCarSummary(id));
  }, []);

  const { rentCarSummary } = useSelector(({ rentCar }) => rentCar);
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
  } = rentCarSummary;

  const { startDate, endDate } = useSelector(({ common }) => common);
  console.log(startDate);
  console.log(endDate);

  return (
    <div className="app-warpper">
      <div className="page-center">
        <div className="box">
          <h1 className="h1 mb-5">Please confirm booking details</h1>
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

          <p className="row">
            <div className="col-6">
              Start Date : <strong>{startDate}</strong>
            </div>

            <div className="col-6">
              End Date : <strong>{endDate}</strong>
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

export default RentCarSummary;
