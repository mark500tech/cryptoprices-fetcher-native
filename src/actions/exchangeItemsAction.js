import {API_REQUEST, FETCH_EXCHANGE_ITEMS_FAILURE, FETCH_EXCHANGE_ITEMS_PENDING, FETCH_EXCHANGE_ITEMS_SUCCESS} from "./constants";
import {URL_DATA} from "../constants";

export const fetchExchangeItems = () => ({
  type: API_REQUEST,
  payload: {
    pendingType: FETCH_EXCHANGE_ITEMS_PENDING,
    successType: FETCH_EXCHANGE_ITEMS_SUCCESS,
    failureType: FETCH_EXCHANGE_ITEMS_FAILURE,
    url: URL_DATA
  }
});