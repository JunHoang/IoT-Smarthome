import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

let reqHeader = new Headers();
reqHeader.append('Content-Type', 'text/json','Access-Control-Allow-Origin'); //,'no-cors'
let initObject = {
    method: 'GET', headers: reqHeader,
};

export const fetchInfo = () => (dispatch) => {
    console.log("Fetch info first")
    dispatch(infoLoading(true));

    return fetch(baseUrl + 'all',initObject)
    .then(response => {
        if (response.ok) {
            return response;
          } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
          }
        },
        error => {
              var errmess = new Error(error.message);
              throw errmess;
        })
        .then(response => response.json())
        .then(info => dispatch(addInfo(info)))
        .catch(error => dispatch(infoFailed(error.message)));
}

export const infoLoading = () => ({
    type: ActionTypes.INFO_LOADING
});

export const infoFailed = (errmess) => ({
    type: ActionTypes.INFO_FAILED,
    payload: errmess
});

export const addInfo = (info) => ({
    type: ActionTypes.ADD_INFO,
    payload: info
});

export const updateKey = (name) => (dispatch) => {
    return fetch(baseUrl +'security/'+name,{
        method: 'PUT',
        headers: {'Content-Type': 'application/json' },
        credentials: "same-origin"
    }). then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    }, err => {
        throw err;
    })
    .then(response => {
        console.log("response updateKey: " + response.json);
        return response.json()
    })
    .then(response =>  {
        console.log("response updateKey addInfo: " + JSON.stringify(response));
        return dispatch(addInfo(response))})
    .catch(error => {console.log('update Key', error.message)});
};

export const updateLights = (name) => (dispatch) => {
    return fetch(baseUrl +'lights/'+name,{
        method: 'PUT',
        headers: {'Content-Type': 'application/json' },
        credentials: "same-origin"
    }). then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    }, err => {
        throw err;
    })
    .then(response => {
        console.log("response updatelight: " + response.json);
        return response.json()
    })
    .then(response =>  {
        console.log("response updatelight addInfo: " + JSON.stringify(response));
        return dispatch(addInfo(response))})
    .catch(error => {console.log('update lights', error.message)});
};
