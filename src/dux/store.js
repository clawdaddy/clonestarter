import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import projectCreationReducer from './projectCreationReducer';
import profileReducer from './profileReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({projectCreationReducer, profileReducer})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(promiseMiddleware())))

export default store