import { actionTypes } from "../constants";

const initialState = {
  allCity: [],
  selectedCity: "",
  startDate: "",
  endDate: "",
  isLogin: false,
  loginDetails: {},
};

const common = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_CITY: {
      return { ...state, allCity: action.payload };
    }
    case actionTypes.SELECTED_CITY: {
      return { ...state, selectedCity: action.payload };
    }
    case actionTypes.SELECTED_CITY_CLEAR: {
      return { ...state, selectedCity: "" };
    }
    case actionTypes.START_DATE: {
      return { ...state, startDate: action.payload };
    }
    case actionTypes.END_DATE: {
      return { ...state, endDate: action.payload };
    }
    case actionTypes.IS_LOGIN: {
      return { ...state, isLogin: action.payload };
    }
    case actionTypes.LOGIN_DETAILS: {
      return { ...state, loginDetails: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default common;
