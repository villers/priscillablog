import { compose, applyMiddleware, createStore } from 'redux';
import { routerMiddleware, connectRouter} from "connected-react-router";

import logger from 'redux-logger'
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
