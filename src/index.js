import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";





const searchReducer = (state = [], action) => {
    if(action.type === 'SET_RESULTS'){
        console.log('In searchReducer', action.payload);
        return action.payload;
    }
    return state;
}






function* getSearch(action){
    //console.log('in getSearchhhh!');  
    try{
        const response = yield axios({
            method: 'GET',
            url: `/api/search${action.payload}`
        })
        yield put({
            type: 'SET_RESULTS',
            payload: response.data
        });
    }catch(error){
        console.log('Errorin GET getSearch', error);
        
    }
}






const reduxStore = createStore(
    combineReducers({
        searchReducer,
    }),
    applyMiddleware(logger)
);



ReactDOM.render
    (<Provider store={reduxStore}>
        <App />
    </Provider>,
document.getElementById('root'));

registerServiceWorker();