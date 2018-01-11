import {FETCH_DATA_SUCCESS} from "../actions/constants";

const initialState = {};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        exchangeItems: action.payload
      };

    default:
      return state;
  }
};