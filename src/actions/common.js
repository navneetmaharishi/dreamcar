import { axiosRequester } from "../utils/axiosRequester";
import { endPointConstants, actionTypes } from "../constants";

export const getAllCity = () => async (dispatch) => {
  const response = await axiosRequester("get", endPointConstants.ALL_CITY);

  return dispatch({
    type: actionTypes.FETCH_ALL_CITY,
    payload: response.data,
  });
};

export const selectedCity = (city) => {
  return {
    type: actionTypes.SELECTED_CITY,
    payload: city,
  };
};

export const selectedCityClear = () => {
  return {
    type: actionTypes.SELECTED_CITY_CLEAR,
  };
};

export const selectedStartDate = (date) => {
  return {
    type: actionTypes.START_DATE,
    payload: date,
  };
};

export const selectedEndtDate = (date) => {
  return {
    type: actionTypes.END_DATE,
    payload: date,
  };
};

export const setLogin = (data) => {
  console.log("hey in action", data);
  return {
    type: actionTypes.IS_LOGIN,
    payload: data,
  };
};

export const setLoginDetails = (data) => {
  return {
    type: actionTypes.LOGIN_DETAILS,
    payload: data,
  };
};
