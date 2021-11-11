import { useSelector } from "react-redux";

const Car = () => {
  const { carData } = useSelector(({ sellCar }) => sellCar);
  const {
    make,
    model,
    variant,
    transmissionType,
    type,
    driven,
    color,
    modelYear,
    expectedPrice,
    city,
  } = carData;

  return (
    <>
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
    </>
  );
};

export default Car;
