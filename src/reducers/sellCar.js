import { actionTypes } from "../constants";

const initialState = {
  userData: {},
  carData: {},
  sellCarRes: {},
};

const sellCar = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_FORM: {
      return { ...state, userData: action.payload };
    }
    case actionTypes.CAR_FORM: {
      return { ...state, carData: action.payload };
    }
    case actionTypes.SELL_CAR: {
      return { ...state, sellCarRes: action.payload };
    }
    case actionTypes.CLEAR_SELL_CAR_DATA: {
      return { ...state, sellCarRes: {} , userData : {} , carData : {} };
    }
    default: {
      return state;
    }
  }
};

export default sellCar;
