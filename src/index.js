import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'

import '@fortawesome/fontawesome-free/css/all.min.css';

import './index.css';
import App from './components/App';
import store from './store'
import { lightTheme } from './constants/theme';

console.log('store', store.getState().theme)

const theme = store.getState().theme

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

