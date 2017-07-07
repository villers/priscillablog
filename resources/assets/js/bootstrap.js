import 'react-hot-loader/patch';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';

import { Provider } from 'react-redux';
import { configureClient, configureStore } from './configure';
import reducer from './reducers';
import routes from './routes';
import AppProvider from './providers/AppProvider';
// import { whyDidYouUpdate } from 'why-did-you-update';

// if (process.env.NODE_ENV === 'development') {
//   whyDidYouUpdate(React);
// }

const history = createBrowserHistory();
const client = configureClient('/api');
const store = configureStore(reducer, history, client);

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <AppProvider>
        <ConnectedRouter history={history} store={store}>
          { routes }
        </ConnectedRouter>
      </AppProvider>
    </Provider>
  </AppContainer>,
  document.querySelector('#app'),
);

if (module.hot) {
  module.hot.accept();
}

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    store.replaceReducer(reducer);
  });
}
