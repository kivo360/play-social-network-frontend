import axios from 'axios';


// axios.defaults.baseURL = "https://challenge.shipwithbolt.com";
const instance = axios.create({
    baseURL: "https://challenge.shipwithbolt.com"
});

instance.defaults.timeout = 10000;

function getUser(userId){
    // Use saga to save returned variable into state
    return instance.get('/user/'+userId);
}






// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// const base = ;
// user/:userId
