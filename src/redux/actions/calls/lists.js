import axios from 'axios';
import error from '../../slices/error'
import userslice from '../../slices/user'
import viewslice from '../../slices/views'

const erract = error.actions;
const useract = userslice.actions;
const viewact = viewslice.actions;
const apiUrl = 'http://localhost:8000';

const instance = axios.create({
    baseURL: apiUrl
});

instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

const defaultError = {
  data:{
    title: "Connection Error",
    msg: "Cannot connect to server"
  }
}



export const fetchNewPosts = ( ) => {
    return (dispatch) => {
        return instance.post('/lists/get', {category: "home"})
            .then(response => {
            // If it's successful, we should send a jwt to the user to store for later.
            console.log(response);
                if(response.data !== undefined){
                    // console.log(response.data);
                    dispatch(viewact.setPostList(response.data.data))
                    // dispatch(useract.setUserInfo(response.data.user));
                    // dispatch(useract.setToken(response.data.token));
                }
            // Set the token here
            // Set the user here

            })
            .catch(error => {
                // TODO: Create an error handler inside of app.js to deliver messages
                if (error.response === undefined){
                    dispatch(erract.setError(defaultError))
                }else{
                    dispatch(erract.setError(error.response))
                }
                // throw(error);
        });
    }
};

export const fetchHomePosts = () => {
    return (dispatch) => {
        return instance.post('/lists/get', {category: "home"})
            .then(response => {
            // If it's successful, we should send a jwt to the user to store for later.
            console.log(response);
                if(response.data !== undefined){
                    dispatch(viewact.setHomeNew(response.data.data))
                    // dispatch(useract.setUserInfo(response.data.user));
                    // dispatch(useract.setToken(response.data.token));
                }
            // Set the token here
            // Set the user here

            })
            .catch(error => {
                // TODO: Create an error handler inside of app.js to deliver messages
                console.log(error.response);
                if (error.response === undefined){
                    dispatch(erract.setError(defaultError))
                }else{
                    dispatch(erract.setError(error.response))
                }
                // throw(error);
        });
    }
};

export const fetchHomeTrendingPosts = () => {
    return (dispatch) => {
        return instance.post('/lists/trending/home', {limit: 6})
            .then(response => {
            // If it's successful, we should send a jwt to the user to store for later.
            console.log(response);
                if(response.data !== undefined){
                    console.log(response.data);
                    dispatch(viewact.setHomeTrending(response.data.data))
                    // dispatch(useract.setUserInfo(response.data.user));
                    // dispatch(useract.setToken(response.data.token));
                }
            // Set the token here
            // Set the user here

            })
            .catch(error => {
                // TODO: Create an error handler inside of app.js to deliver messages
                console.log(error.response);
                if (error.response === undefined){
                    dispatch(erract.setError(defaultError))
                }else{
                    dispatch(erract.setError(error.response))
                }
                // throw(error);
        });
    }
};


export const fetchTrendingPost = ({ category, page }) => {
    // Gets all of the trending posts for the site. It's paginated by 10 for now, so the page will get the number skipping


    return (dispatch) => {
    //   return axios.post(`${apiUrl}/publish`, {title, body})
    //     .then(response => {
    //       dispatch(createPostSuccess(response.data))
    //     })
    //     .catch(error => {
    //       throw(error);
    //     });
    };
};

export const fetchHotPosts = ({ category, page }) => {
    // Gets all of the hotest posts for the site

    return (dispatch) => {
    //   return axios.post(`${apiUrl}/publish`, {title, body})
    //     .then(response => {
    //       dispatch(createPostSuccess(response.data))
    //     })
    //     .catch(error => {
    //       throw(error);
    //     });
    };
};