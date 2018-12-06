import { combineReducers } from 'redux';
// import base from './baseReducer';
import views from '../slices/views';
import user from '../slices/user';

export default combineReducers({
    user: user.reducer,
    view: views.reducer 
});