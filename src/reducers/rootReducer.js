import combineReducers from 'combine-reducers';

import {exchangeItemsReducer} from "./exchangeItemsReducer";

export const rootReducer = combineReducers({
  exchangeItems: exchangeItemsReducer
});

