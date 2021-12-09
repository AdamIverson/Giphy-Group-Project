import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";


// create favoriteReducer - array that holds favorite gifs
const favoritesReducer = (state = [], action) => {
    return state;
};

// create Saga function to fetchFavorites
function* fetchFavorites(action) {
    try {
        console.log(action);
        // make axios GET request to '/api/favorite' for favorites
        const response = yield axios({
            method: 'GET',
            url: '/api/favorite'
        });
        // Update favoritesReducer
        yield put({
            type: 'ADD_FAVORITES',
            payload: response.data
        })
    } catch(err) {
        console.error(err);
    }
} // end fetchFavorites


// create Saga watcher function



// instantiate Saga middleware



// create app's redux store



// run Saga middleware



// wrap app in Provider
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

