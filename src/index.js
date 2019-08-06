import './index.css';
import 'tachyons';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import JavascriptTimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import billsReducer from './store/billsReducer'
import matesReducer from './store/matesReducer'
import pinsBoardReducer from './store/pinsBoardReducer'
import authReducer from './store/authReducer'
import groceriesReducer from './store/groceriesReducer'

JavascriptTimeAgo.locale(en)
const reducer = combineReducers({bills:billsReducer,mates:matesReducer,pins:pinsBoardReducer,groceries:groceriesReducer,auth:authReducer})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(<Provider store ={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
