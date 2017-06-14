/* eslint-disable no-underscore-dangle */
import { applyMiddleware, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import logger from 'redux-logger';
import axiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk';

const configureStore = (reducer, history, client, initialState = {}) => {
  const router = connectRouter(history)(reducer);
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middleware = composeEnhancer(
    applyMiddleware(logger),
    applyMiddleware(thunk),
    applyMiddleware(axiosMiddleware(client)),
    applyMiddleware(routerMiddleware(history)),
  );

  return createStore(router, initialState, middleware);
};

export default configureStore;
