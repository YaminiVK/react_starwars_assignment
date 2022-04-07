import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import { peopleReducer } from './Reducers/peopleReducer';

export const store = createStore(peopleReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') || document.createElement('div')
);

