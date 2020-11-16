import * as ActionTypes from './ActionTypes';

export const Info = (state = { 
    isLoading: true,
    errMess : null,
    info:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_INFO:
            return{...state, isLoading: false, errMess: null, info: action.payload};

        case ActionTypes.INFO_LOADING:
            return{...state, isLoading: true, errMess: null, info:[]};
        
        case ActionTypes.INFO_FAILED:
            return{...state, isLoading: false, errMess:action.payload};
        
        default:
            return state;
        
    }
};