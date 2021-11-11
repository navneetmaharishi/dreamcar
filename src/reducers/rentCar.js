import { actionTypes } from "../constants";

const initialState = {
  rentCarList: [],
  rentCarSummary: {},
};

const rentCar = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_RENT_CAR_LIST: {
      return { ...state, rentCarList: action.payload };
    }
    case actionTypes.FETCH_RENT_CAR_SUMMARY: {
      return { ...state, rentCarSummary: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default rentCar;
