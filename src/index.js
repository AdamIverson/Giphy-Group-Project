import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

// create favoriteReducer - array that holds favorite gifs
const favoritesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FAVORITES':
            console.log('in favoritesReducer', action.payload);
            return action.payload;
        default:
            return state;
    };
};

// create Saga function to fetchFavorites
function* fetchFavorites(action) {
    try {
        // console.log('in fetchFavorites', action);
        // make axios GET request to '/api/favorite' for favorites
        const response = yield axios({
            method: 'GET',
            url: '/api/favorite'
        });
        // Update favoritesReducer
        yield put({
            type: 'SET_FAVORITES',
            payload: response.data
        })
    } catch (err) {
        console.error(err);
    }
} // end fetchFavorites


const categoryReducer = (state = [], action) => {
    switch(action.type){
        case 'SET_CATEGORY':
            return action.payload;
            default:
                return state;
    }
}

function* getCategory(){
    try{
        const response = yield axios({
            method: 'GET',
            url: '/api/category'
        })
        yield put({
            type: 'SET_CATEGORY',
            payload: response.data
        })
    }catch(error){
        console.log(error);
        
    }
}
//=========================================================================
const searchReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_SEARCH':
            return action.payload;
            default:
                return state;
    }
    
}



//--------------------------------------
function* getSearch(action){
    //console.log('in getSearchhhh!');  
    try{
        const response = yield axios({
            method: 'GET',
            url: `/api/search?q=${action.payload}`
        })
        yield put({
            type: 'SET_RESULTS',
            payload: response.data
        });
        console.log(response.data);
    }catch(error){
        console.log('Error in GET getSearch', error);
    }
};

//=========================================================================

function* addFavorite(action) {
    try {
      const response = yield axios({
        method: "POST",
        url: "/api/plant",
        data: { plant: action.payload },
      });
      yield put({
        type: "FETCH_FAVORITES",
      });
    } catch (err) {
      console.log(err);
    }
  }


// create Saga watcher function
function* watcherSaga() {
    yield takeEvery('FETCH_FAVORITES', fetchFavorites);
    yield takeEvery('FETCH_SEARCHES', getSearch);
    yield takeEvery('ADD_FAVORITE', addFavorite);
}

// instantiate Saga middleware
const sagaMiddleware = createSagaMiddleware();

// create app's redux store
const store = createStore(
    combineReducers({
        favoritesReducer,
        searchReducer,
        categoryReducer
    }),
    // ⚡ TODO Apply Saga middleware:
    applyMiddleware(logger, sagaMiddleware)
);

// run Saga middleware
sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
