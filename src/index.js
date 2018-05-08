import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'


import userReducer from './reducers/userReducer';
const store = createStore(userReducer);
ReactDOM.render(
<BrowserRouter>
<Provider store={store}>
<App />
</Provider></BrowserRouter>, document.getElementById('root'));
