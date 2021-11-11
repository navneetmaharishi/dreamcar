import { actionTypes } from "../constants";

const initialState = {
  buyCarList: [],
  buyCarSummary: {
    carDetail: {},
    userDetail: {},
  },
};

const buyCar = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BUY_CAR_LIST: {
      return { ...state, buyCarList: action.payload };
    }
    case actionTypes.FETCH_BUY_CAR_SUMMARY: {
      return { ...state, buyCarSummary: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default buyCar;
