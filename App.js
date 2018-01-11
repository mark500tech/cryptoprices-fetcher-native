import React from 'react';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import {createLogger} from 'redux-logger';
import {rootReducer} from "./src/reducers/rootReducer";
import {apiMiddleware} from "./src/middlewares/apiMiddleware";
import Main from "./src/components/Main";

const logger = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(apiMiddleware, thunk, promise, logger)
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <Main/>
      </Provider>

    );
  }
}
