import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Info } from './info';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            info: Info
        }), 
        applyMiddleware(thunk,logger)
    );

    return store;
}