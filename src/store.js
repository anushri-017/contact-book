import {createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk  from "redux-thunk";
import  logger from 'redux-logger';
import contactReducer from './Redux/Reducers/ContactReducers';

const Store = createStore(contactReducer, 
    composeWithDevTools(applyMiddleware(thunk,logger))
    );

export default Store;
