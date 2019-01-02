import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'
import rootReducer from './reducers'
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';


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


// const init = {
//   userid: 'u2kjfladadwddj9',
//   loading: false,
//   error: false
// };
  

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['decisions', 'user']
}

// const viewPersistConfig = {
//   key: 'view',
//   storage: storage,
//   whitelist: ['viewWelcome']
// }



const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({ reducer: persistedReducer, middleware: middleware });
export const persistor = persistStore(store);


// export default store;