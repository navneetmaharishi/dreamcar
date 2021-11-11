import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { carForm } from "../../../../actions";

const CarForm = (props) => {
  const { setForm, showForm } = props;
  const dispatch = useDispatch();
  const { carData } = useSelector(({ sellCar }) => sellCar);

  useEffect(() => {
    let isUSer =
      carData &&
      Object.keys(carData).length > 0 &&
      Object.getPrototypeOf(carData) === Object.prototype;

    if (isUSer) {
      setCar(carData);
    }
  }, []);

  const [car, setCar] = useState({
    make: "",
    model: "",
    variant: "",
    transmissionType: "manual",
    type: "petrol",
    driven: "",
    color: "",
    modelYear: "",
    expectedPrice: "",
    city: "",
    rc: "",
  });

  const [isVarified, setVarified] = useState(false);

  const updateCarData = (e) => {
    let target = e.target;

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
      rc,
    } = car;

    let data = {
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
      rc,
    };

    if (target.id === "next") {
      setForm({ ...showForm, isCarForm: false });
    } else {
      setForm({ ...showForm, isCarForm: false, isUserForm: true });
    }
    dispatch(carForm(data));
  };

  const onInputChange = (e) => {
    let target = e.target,
      id = target.id,
      value = target.type === "checkbox" ? target.checked : target.value;
    if (target.type === "checkbox") {
      setVarified(value);
    } else {
      setCar({ ...car, [id]: value });
    }
  };

  return (
    <div className="container-fluid">
      <h2 className="text-center mb-5">Car Details</h2>
      <form className="row g-3" id="form">
        <div className="col-md-6">
          <label htmlFor="make" className="form-label">
            Make
          </label>
          <input
            type="text"
            className="form-control"
            id="make"
            value={car.make}
            onChange={onInputChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="model" className="form-label">
            Model
          </label>
          <input
            type="text"
            className="form-control"
            id="model"
            value={car.model}
            onChange={onInputChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="variant" className="form-label">
            Variant
          </label>
          <input
            type="text"
            className="form-control"
            id="variant"
            value={car.variant}
            onChange={onInputChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="transmissionType" className="form-label">
            Transmission Type
          </label>
          <select
            className="form-select"
            id="transmissionType"
            value={car.transmissionType}
            onChange={onInputChange}
          >
            <option value="manual">Manual</option>
            <option value="automatic">Automatic</option>
          </select>
        </div>
        <div className="col-6">
          <label htmlFor="type" className="form-label">
            Type
          </label>
          <select
            className="form-select"
            id="type"
            value={car.type}
            onChange={onInputChange}
          >
            <option value="petrol">Petrol</option>
            <option value="diesel">Diesel</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="driven" className="form-label">
            Driven (KM)
          </label>
          <input
            type="number"
            className="form-control"
            id="driven"
            value={car.driven}
            onChange={onInputChange}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="color" className="form-label">
            Color
          </label>
          <input
            type="text"
            className="form-control"
            id="color"
            value={car.color}
            onChange={onInputChange}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="modelYear" className="form-label">
            Model Year
          </label>
          <input
            type="number"
            className="form-control"
            id="modelYear"
            value={car.modelYear}
            onChange={onInputChange}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            value={car.city}
            onChange={onInputChange}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="expectedPrice" className="form-label">
            Expected Price
          </label>
          <input
            type="number"
            className="form-control"
            id="expectedPrice"
            value={car.expectedPrice}
            onChange={onInputChange}
          />
        </div>

        <div className="col-md-8">
          <label htmlFor="uploadRC" className="form-label">
            Upload RC
          </label>
          <input
            type="file"
            className="form-control"
            id="uploadRC"
            // value={car.rc}
            onChange={onInputChange}
          />
        </div>

        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="varifiedForm"
              checked={isVarified}
              onChange={onInputChange}
            />
            <label className="form-check-label" htmlFor="varifiedForm">
              I do hereby declare that all the information given above is true
              to the best of my knowledge and belief
            </label>
          </div>
        </div>
        <div className="col-12 text-end">
          <button
            id="pre"
            type="button"
            className="btn btn-primary me-2"
            disabled={!isVarified}
            onClick={updateCarData}
          >
            Previous
          </button>
          <button
            id="next"
            type="button"
            className="btn btn-primary"
            disabled={!isVarified}
            onClick={updateCarData}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
