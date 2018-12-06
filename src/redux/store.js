/*
 * src/store.js
 * With initialState
*/
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'


import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware()


const init = {
  userid: 'u2kjfladadwddj9',
  loading: false,
  error: false
};

function configureStore(initialState=init) {

  return createStore(
  rootReducer,
   applyMiddleware(sagaMiddleware)
 );
}

const store = configureStore();
sagaMiddleware.run(rootSaga)

export default store;