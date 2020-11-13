import {createStore, combineReducers} from 'redux';
import { Bedroomthings } from './bedroomthings';
import { Lvroomthings} from './lvroomthings';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            lvroomthings: Lvroomthings, 
            bedroomthings: Bedroomthings
        })
    );

    return store;
}