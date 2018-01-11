import {FETCH_DATA_PENDING, FETCH_DATA_SUCCESS} from "./constants";

export const fetchDataPending = () => ({
  type: FETCH_DATA_PENDING
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data
});