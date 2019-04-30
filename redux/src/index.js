import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import { rootReducer } from './reducers';

ReactDOM.render(
    <Provider store={createStore(rootReducer)}>
        <App />
    </Provider>
    , document.getElementById('root'));

