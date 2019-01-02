import axios from 'axios';
import viewslice from '../../slices/views'


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



export const createPost = ({ category, page }) => {
    return (dispatch) => {
        return instance.post('/lists/get', {category, page})
            .then(response => {
                // If it's successful, we should send a jwt to the user to store for later.
                console.log(response);
            })
            .catch(error => {
                // TODO: Create an error handler inside of app.js to deliver messages
                console.log(error.response);
                // if (error.response === undefined){
                //     dispatch(erract.setError(defaultError))
                // }else{
                //     dispatch(erract.setError(error.response))
                // }
                // throw(error);
        });
    }
};
  

export const fetchPost = (postId) => {
    return (dispatch) => {
      return axios.post(`${apiUrl}/post/view`, {postid: postId})
        .then(response => {
            console.log(response);
          dispatch(viewact.setCurrentPost(response.data.data))
        })
        .catch(error => {
            console.log(error.response)
          throw(error);
        });
    };
};

export const deletePost = ({ postId }) => {
    // return (dispatch) => {
    //   return axios.post(`${apiUrl}/publish`, {title, body})
    //     .then(response => {
    //       dispatch(createPostSuccess(response.data))
    //     })
    //     .catch(error => {
    //       throw(error);
    //     });
    // };
};