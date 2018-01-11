import {FETCH_EXCHANGE_ITEMS_SUCCESS} from "../actions/constants";

const initialState = {};

export const exchangeItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXCHANGE_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload
      };

    default:
      return state;
  }
};