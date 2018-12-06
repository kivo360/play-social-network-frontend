import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'
import rootReducer from './reducers'
import logger from 'redux-logger'

/*
 * src/store.js
 * With initialState
*/
// import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga'



// import rootReducer from './reducers';
// import rootSaga from './sagas';

// const sagaMiddleware = createSagaMiddleware()
const middleware = [...getDefaultMiddleware(), logger]


const init = {
  userid: 'u2kjfladadwddj9',
  loading: false,
  error: false
};
  

const store = configureStore({ reducer: rootReducer, middleware: middleware, preloadedState: init })

export default store;