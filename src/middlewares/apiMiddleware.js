import axios from 'axios';

import {API_REQUEST} from "../actions/constants";

export const apiMiddleware = ({data, dispatch}) => (next) => (action) => {
  if (action.type !== API_REQUEST) {
    return next(action);
  }

  dispatch({ type: action.payload.pendingType });

  axios.get(action.payload.url)
    .then((result) => {
      dispatch({ type: action.payload.successType, payload: result.data });
    })
    .catch((err) => {
      dispatch({ type: action.payload.failureType });
      console.log('Fetch error', err)
    });
};