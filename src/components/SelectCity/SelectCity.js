import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAllCity, selectedCity } from "../../actions";

const SelectCity = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCity());
  }, []);

  const cityReducer = useSelector(({ common }) => common);

  const onCityChange = (e) => {
    let city = e.target.value;
    dispatch(selectedCity(city));
  };

  return (
    <>
      {props.label && (
        <label htmlFor="city" className="form-label">
          Select city
        </label>
      )}

      <select className="form-select form-control-lg" onChange={onCityChange}>
        <option value="" selected={cityReducer.selectedCity === ""}>
          {props.defaultText ? props.defaultText : "All city"}
        </option>

        {cityReducer.allCity.map((city) => (
          <option
            key={city.name}
            value={city.name}
            selected={cityReducer.selectedCity === city.name}
          >
            {city.displayName}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectCity;
