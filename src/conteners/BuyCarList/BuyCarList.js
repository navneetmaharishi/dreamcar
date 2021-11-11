import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getBuyCarList } from "../../actions";

import CarBuyCard from "../../components/CarBuyCard";
import SelectCity from "../../components/SelectCity";

const BuyCarList = (props) => {
  const dispatch = useDispatch();

  const { buyCarList } = useSelector(({ buyCar }) => buyCar);
  const { selectedCity } = useSelector(({ common }) => common);

  const { city } = props.match.params;

  useEffect(() => {
    dispatch(getBuyCarList(city));
  }, [city]);

  useEffect(() => {
    props.history.push(`/buyList/${selectedCity}`);
  }, [selectedCity]);

  return (
    <div className="app-warpper">
      <div className="container">
        <div className="page-header">
          <h3 className="h3">All available cars </h3>
          <div>
            <SelectCity defaultText="All" />
          </div>
        </div>
        <div className="row">
          {buyCarList.map((car, index) => (
            <div className="col-4" key={index}>
              <CarBuyCard car={car} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyCarList;
