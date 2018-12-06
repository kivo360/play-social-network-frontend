import _ from 'lodash';
import { call, apply, put, takeLatest, select } from 'redux-saga/effects';
import { ERROR_USER_INFO, GET_USER_INFO, SET_USER_INFO } from '../actions/consts';
import { GetUser, GetBilling } from '../services/user';
import { UserId, User } from './selectors';


export function* GetUserInfo() {
    
    const user = yield select(User)

    if(_.isEqual(user, {}) === false){
        // We can return to the default state. This means we don't need to make another call
        console.log("This should only be calling when valid");
        return;   
    }
    
    const userId = yield select(UserId)
    
    
    try {
        // Why you no work?

        const data = yield call(GetUser, userId)
        console.log(data);
        
        yield put({ type: SET_USER_INFO, payload: data });
    } catch (e) {
        console.log("Something isn't working [placeholder]")
        yield put({ type: ERROR_USER_INFO, payload: e.message });
    }
    
}

export function* GetUserBilling() {
    try {
        const data = yield call(GetUser);
        yield put({ type: GET_USER_INFO, payload: data });
    } catch (e) {
        yield put({ type: ERROR_USER_INFO, payload: e.message });
    }
}

export function* loadUserSaga() {
    
    yield takeLatest('GET_USER_INFORMATION', GetUserInfo);
    // Check to see if we have user first
    
}

