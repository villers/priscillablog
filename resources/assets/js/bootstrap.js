import 'materialize-css';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import { configureClient, configureStore } from './configure';
import reducer from './reducers';
import App from './App';

const history = createBrowserHistory();
const client = configureClient('/api');
const store = configureStore(reducer, history, client);

const config = () => {
    window.axios = require('axios');
    window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

    let token = document.head.querySelector('meta[name="csrf-token"]');

    if (token) {
        window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
    } else {
        console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
    }
};
config();


const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <App history={history} />
            </Provider>
        </AppContainer>,
        document.querySelector('.container')
    )
};

render();

// Hot reloading
if (module.hot) {
    // Reload components
    module.hot.accept('./App', () => {
        render();
    });

    // Reload reducers
    module.hot.accept('./reducers', () => {
        store.replaceReducer(connectRouter(history)(reducer));
    })
}
