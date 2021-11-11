import { axiosRequester } from "../utils/axiosRequester";
import { endPointConstants, actionTypes } from "../constants";

export const getBuyCarList =
  (city = "") =>
  async (dispatch) => {
    const response = await axiosRequester(
      "get",
      endPointConstants.BUY_CAR_LIST,
      {},
      city
    );

    return dispatch({
      type: actionTypes.FETCH_BUY_CAR_LIST,
      payload: response.data,
    });
  };

export const getBuyCarSummary = (id) => async (dispatch) => {
  const response = await axiosRequester(
    "get",
    endPointConstants.BUY_CAR_SUMMARY,
    {},
    id
  );

  return dispatch({
    type: actionTypes.FETCH_BUY_CAR_SUMMARY,
    payload: response.data,
  });
};
