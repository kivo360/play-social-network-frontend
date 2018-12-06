// This is the base file. It carries all of the key pieces of information in the instance. Used to call everything else.

import axios from 'axios';


// axios.defaults.baseURL = "https://challenge.shipwithbolt.com";
const instance = axios.create({
    baseURL: "https://challenge.shipwithbolt.com",
    defaults:{
        // Using long timeout to prevent timeout problems
        timeout: 10000
    }
});

export default instance;