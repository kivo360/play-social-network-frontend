import { combineReducers } from 'redux';
import user from './userReducer';
import billing from './billingReducer';
import base from './baseReducer';


export default combineReducers({
    user,
    billing,
    base
});