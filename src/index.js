import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import {store, persistor} from './redux/store';
import { BrowserRouter, Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'

import createHistory from 'history/createBrowserHistory';

const history = createHistory();


ReactDOM.render(
    <Router history={history}>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    document.getElementById('root')
   );
registerServiceWorker();
