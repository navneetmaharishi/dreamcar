import { axiosRequester } from "../utils/axiosRequester";
import { endPointConstants, actionTypes } from "../constants";

export const userForm = (data) => {
  return {
    type: actionTypes.USER_FORM,
    payload: data,
  };
};

export const carForm = (data) => {
  return {
    type: actionTypes.CAR_FORM,
    payload: data,
  };
};

export const sellCar = (data) => async (dispatch) => {
  const response = await axiosRequester(
    "post",
    endPointConstants.SELL_CAR,
    data
  );

  return dispatch({
    type: actionTypes.SELL_CAR,
    payload: response,
  });
};

export const clearSellCarData = () => {
  return {
    type: actionTypes.CLEAR_SELL_CAR_DATA,
  };
};
