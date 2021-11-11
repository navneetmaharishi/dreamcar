import { combineReducers } from "redux";

import common from "./common";
import rentCar from "./rentCar";
import buyCar from "./buyCar";
import sellCar from "./sellCar";

const reducer = combineReducers({
  common,
  rentCar,
  buyCar,
  sellCar,
});

export default reducer;
