import 'react-hot-loader/patch';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { whyDidYouUpdate } from 'why-did-you-update';

import { configureClient, configureStore } from './configure';
import reducer from './reducers';
import routes from './routes';

if (process.env.NODE_ENV === 'development') {
  whyDidYouUpdate(React);
}

const history = createBrowserHistory();
const client = configureClient('/api');
const store = configureStore(reducer, history, client);

const config = () => {
  /*
   let window;
   window.axios = require('axios');
   window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

   const token = document.head.querySelector('meta[name="csrf-token"]');

   if (token) {
   window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
   } else {
   console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
   }
   */
};
config();


ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        { routes }
      </ConnectedRouter>
    </Provider>
  </AppContainer>,
  document.querySelector('#app'),
);

if (module.hot) {
  module.hot.accept();
}
