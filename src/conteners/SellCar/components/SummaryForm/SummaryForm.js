import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { User, Car } from "./components";

import { sellCar, clearSellCarData } from "../../../../actions";

const tabs = [
  {
    id: "user-tab",
    name: "User",
    target: "user",
  },
  {
    id: "car-tab",
    name: "Car",
    target: "car",
  },
];

const SummaryForm = (props) => {
  const { setForm, showForm } = props;
  const dispatch = useDispatch();
  const history = useHistory();

  const { carData, userData, sellCarRes } = useSelector(
    ({ sellCar }) => sellCar
  );

  useEffect(() => {
    let isSellCar =
      sellCarRes &&
      Object.keys(sellCarRes).length > 0 &&
      Object.getPrototypeOf(sellCarRes) === Object.prototype;

    if (isSellCar) {
      history.push("/bookingCnf");
      dispatch(clearSellCarData());
    }
  }, [sellCarRes]);

  const renderTab = (id) => {
    switch (id) {
      case "user-tab": {
        return <User />;
      }
      case "car-tab": {
        return <Car />;
      }
      default: {
        return <h1>Somthing went wrong</h1>;
      }
    }
  };

  const previousForm = () => {
    setForm({ ...showForm, isCarForm: true });
  };

  const cnfSale = () => {
    dispatch(
      sellCar({
        userDetail: userData,
        carDetail: carData,
      })
    );
  };

  return (
    <div className="container-fluid">
      <h1 className="h1 mb-4">Please confirm details</h1>

      <ul className="nav nav-tabs" id="confirmDetails" role="tablist">
        {tabs.map((tab, index) => (
          <li className="nav-item w-50" role="presentation" key={index}>
            <button
              className={`nav-link w-100 ${index === 0 ? "active" : ""}`}
              id={tab.id}
              data-bs-toggle="tab"
              data-bs-target={`#${tab.target}`}
              type="button"
              role="tab"
              aria-controls={tab.target}
              aria-selected={index === 0}
            >
              {tab.name}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content" id="myTabContent">
        {tabs.map((tab, index) => (
          <div
            className={`tab-pane fade ${index === 0 ? "show active" : 0}`}
            id={tab.target}
            role="tabpanel"
            aria-labelledby={tab.id}
            key={index}
          >
            <div className="px-2 py-4">{renderTab(tab.id)}</div>
          </div>
        ))}
      </div>

      <div className="text-end">
        <button
          id="pre"
          type="button"
          className="btn btn-primary me-2"
          onClick={previousForm}
        >
          Previous
        </button>
        <button
          id="next"
          type="button"
          className="btn btn-primary"
          onClick={cnfSale}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default SummaryForm;
