import {LVROOMTHINGS} from '../shared/lvroomthings';
import {BEDROOMTHINGS} from '../shared/bedroomthings';

export const initialState = {
    bedroomthings: BEDROOMTHINGS,
    lvroomthings: LVROOMTHINGS
}

export const Reducer = (state = initialState, action) => {
    return state;
};