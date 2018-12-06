import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import globalstore from './redux/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter basename="/">
        <Provider store={globalstore}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
   );
registerServiceWorker();
