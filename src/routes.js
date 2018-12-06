import React from 'react';
import { Billing } from './containers/billing';
import { Home } from './containers/home';

// Would use this file to place all of the routes into the the entire page (App.js)
// impaort './containers'



// Use to better dynamic routes
// TODO: Load in later to app.js
const Routes = [
    {component: Billing, path:'/get-quote', icon: {
        type: 'plus-circle', theme: 'outlined'
    }},
    {
        component: Billing, path:'/billing', icon: {
            type: 'file', theme: 'outlined'
        }
    }
    
]