import axios from 'axios';

import {FETCH_DATA_PENDING} from "../actions/constants";
import {fetchDataSuccess} from "../actions/dataAction";

import {URL_DATA} from "../constants";

export const dataMiddleware = ({data, dispatch}) => (next) => (action) => {
  switch (action.type) {
    case FETCH_DATA_PENDING:
      axios.get(URL_DATA)
        .then((result) => {
          dispatch(fetchDataSuccess(result.data));
        })
        .catch((err) => console.log('Fetch error', err));
      next(action);
      return;

    default:
      next(action);
      return;
  }
};