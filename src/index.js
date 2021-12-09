import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

// catcher function
function* gifCatcher() {
    
}
  
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();
  
const store = createStore(
combineReducers({ 
    
}),
applyMiddleware(sagaMiddleware, logger)
);
  
// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(gifCatcher);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
