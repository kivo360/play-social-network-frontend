// The root saga goes here. Use to import for everywhere
import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'
import {GetUserInfo, GetUserBilling, loadUserSaga} from './user'


export default function* rootSaga() {
    yield all([
      GetUserBilling,
      GetUserInfo,
      loadUserSaga
    ])
  }
  