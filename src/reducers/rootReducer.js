import combineReducers from 'combine-reducers';

import {dataReducer} from "./dataReducer";

export const rootReducer = combineReducers({
   data: dataReducer
});

