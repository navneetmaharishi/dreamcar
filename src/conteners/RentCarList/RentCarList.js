import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getRentCarList } from "../../actions";

import CarRentCard from "../../components/CarRentCard";

const RentCarList = (props) => {
  const { city } = props.match.params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRentCarList(city));
  }, []);

  const { rentCarList } = useSelector(({ rentCar }) => rentCar);

  return (
    <div className="app-warpper">
      <div className="container">
        <div className="page-header">
          <h3 className="h3">
            All available cars in <strong>{city}</strong>
          </h3>
        </div>
        <div className="row">
          {rentCarList.length > 0 ? (
            rentCarList.map((car) => (
              <div className="col-4" key={car.id}>
                <CarRentCard car={car} />
              </div>
            ))
          ) : (
            <h1>no data</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default RentCarList;
