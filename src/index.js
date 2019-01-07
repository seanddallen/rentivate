import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { stripeProvider } from 'react-stripe-elements'
import {createStore, applyMiddleware, compose} from 'redux'
import { init } from './store'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "mdbreact/dist/css/mdb.css";
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-image-crop/dist/ReactCrop.css';
import './App.css';
import rootReducer from './store';
import App from './App';

const store = require('./store').init();

ReactDOM.render(
  <stripeProvider apiKey="pk_test_KtmLCRdt3cxWATlX1TPJu1Au">
    <Provider store={store}>
      <App />
    </Provider>
  </stripeProvider>
  , document.getElementById('root'));
