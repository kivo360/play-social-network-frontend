import { combineReducers } from 'redux';
// import base from './baseReducer';
import views from '../slices/views';
import user from '../slices/user';
import pdecisions from '../slices/userDecisions';
import error from '../slices/error';

export default combineReducers({
    user: user.reducer,
    view: views.reducer,
    decisions: pdecisions.reducer,
    errors: error.reducer
});