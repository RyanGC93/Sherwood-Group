import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Favicon from 'react-favicon';
import './index.css';
import App from './App';
import { ModalProvider } from './context/Modal';

import configureStore from './store';
import { restoreCSRF, fetch } from './store/csrf';

import * as sessionActions from './store/session';

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  restoreCSRF();

  window.csrfFetch = fetch;
  window.store = store;
  window.sessionActions = sessionActions;
}

const Root = () => {
  return (
    <Provider store={store}>
      <ModalProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ModalProvider>
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
	<Favicon url="https://raw.githubusercontent.com/RyanGC93/Sherwood-Group/Front-end-components/frontend/src/favicon.ico" />  
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
