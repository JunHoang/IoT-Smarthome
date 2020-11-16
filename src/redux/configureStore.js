import {createStore, combineReducers} from 'redux';
import { Info } from './info';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            info: Info
        })
    );

    return store;
}