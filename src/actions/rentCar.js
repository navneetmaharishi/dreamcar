import { axiosRequester } from "../utils/axiosRequester";
import { endPointConstants, actionTypes } from "../constants";

export const getRentCarList =
  (city = "") =>
  async (dispatch) => {
    const response = await axiosRequester(
      "get",
      endPointConstants.RENT_CAR_LIST,
      {},
      city
    );

    return dispatch({
      type: actionTypes.FETCH_RENT_CAR_LIST,
      payload: response.data,
    });
  };

export const getRentCarSummary = (id) => async (dispatch) => {
  const response = await axiosRequester(
    "get",
    endPointConstants.RENT_CAR_SUMMARY,
    {},
    id
  );

  return dispatch({
    type: actionTypes.FETCH_RENT_CAR_SUMMARY,
    payload: response.data,
  });
};
