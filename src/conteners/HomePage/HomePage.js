import { useSelector, useDispatch } from "react-redux";

import { selectedStartDate, selectedEndtDate } from "../../actions";

import "./homePage.scss";

import SelectCity from "../../components/SelectCity";

const HomePage = (props) => {
  const dispatch = useDispatch();

  const { selectedCity } = useSelector(({ common }) => common);
  const { history } = props;

  const onDateSelect = (e) => {
    let id = e.target.id,
      value = e.target.value;

    if (id === "startDate") {
      dispatch(selectedStartDate(value));
    } else {
      dispatch(selectedEndtDate(value));
    }
  };

  return (
    <div className="rental-home-wrapper">
      <div className="search-car-wrapper">
        <div className="mb-4">
          <h1 className="text-center h1">
            Rent
            <img className="rent-icon" src="images/icons/car.png" alt="home"/>
          </h1>
        </div>
        <div className="mb-4">
          <SelectCity label defaultText="Select" />
        </div>
        <div className="mb-4">
          <div className="row">
            <div className="col-6">
              <label htmlFor="startDate" className="form-label">
                Start Date
              </label>
              <input
                id="startDate"
                className="form-control form-control-lg"
                type="date"
                placeholder="Start Date"
                aria-label="Start Date"
                onChange={onDateSelect}
              />
            </div>

            <div className="col-6">
              <label htmlFor="endDate" className="form-label">
                End Date
              </label>
              <input
                id="endDate"
                className="form-control form-control-lg"
                type="date"
                placeholder="End Date"
                aria-label="End Date"
                onChange={onDateSelect}
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={() => history.push(`/rentList/${selectedCity}`)}
            disabled={selectedCity ? false : true}
          >
            Search Car
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
