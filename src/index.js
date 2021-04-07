import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './store/createStore'
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import App from './App';

const title = 'React with Webpack and Babel';
 
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
  <BrowserRouter>
  <App title={title} />
  </BrowserRouter>
</React.StrictMode>
</Provider>,
  document.getElementById('app')
);

module.hot.accept();