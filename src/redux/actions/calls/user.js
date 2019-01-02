import axios from 'axios';
import error from '../../slices/error'
import userslice from '../../slices/user'
import viewslice from '../../slices/views'

import {store} from '../../store'

const erract = error.actions;
const useract = userslice.actions;
const viewact = viewslice.actions;
const apiUrl = 'http://localhost:8000';

const instance = axios.create({
    baseURL: apiUrl
});

instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

const defaultError = {
  data:{
    title: "Connection Error",
    msg: "Cannot connect to server"
  }
}

export const loginUser = (data) => {
  return (dispatch) => {
    return instance.post('/auth/login', data)
      .then(response => {
        // If it's successful, we should send a jwt to the user to store for later.
        if(response.data !== undefined){
          dispatch(useract.setUserInfo(response.data.user));
          dispatch(useract.setToken(response.data.token));
        }
        // Set the token here
        // Set the user here

      })
      .catch(error => {
          // TODO: Create an error handler inside of app.js to deliver messages
          if (error.response === undefined){
            dispatch(erract.setError(defaultError))
          }else{
            dispatch(erract.setError(error.response))
          }
          // throw(error);
      });
  };
};


/**
 * 
 * @param {*} param
 */

export const registerUser = (data) => {
    return (dispatch) => {
      return instance.post('/auth/register', data)
        .then(response => {
          // If it's successful, we should send a jwt to the user to store for later.
          if(response.data !== undefined){
            dispatch(useract.setUserInfo(response.data.user));
            dispatch(useract.setToken(response.data.token));
          }
        })
        .catch(error => {
            // TODO: Create an error handler inside of app.js to deliver messages
            if (error.response === undefined){
              dispatch(erract.setError(defaultError))
            }else{
              dispatch(erract.setError(error.response))
            }
        });
    };
};


export const refreshUser = (token) => {
    const currentState = store.getState();
    const ts = Math.round((new Date()).getTime() / 1000);
    // console.log(currentState.view.lastRefresh)
    
      return (dispatch) => {
        if(currentState.view.lastRefresh + 45 < ts){
          instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
          return instance.post('/auth/refresh')
          .then(response => {
            // If it's successful, we should send a jwt to the user to store for later.
  
            if(response.data !== undefined){
              dispatch(useract.setToken(response.data.token));
              dispatch(viewact.setLastRefresh());
            }
            
          })
          .catch(error => {
              // TODO: Create an error handler inside of app.js to deliver messages
              if (error.response === undefined){
                dispatch(erract.setError(defaultError))
              }else{
                console.log(error);
                if (error.response.status === 403){
                  dispatch(useract.clearUserInfo())  
                }
                dispatch(viewact.setLastRefresh())
                dispatch(erract.setError(error.response))
              }
          });
        }else{
          return;
        }
        
    };
    
};