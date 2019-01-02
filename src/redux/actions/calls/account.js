import { ADD_POST, DELETE_POST, FETCH_POST } from '../types';
import axios from 'axios';

const apiUrl = 'http://localhost:5000';


export const fetchUserAccount = ({ userId }) => {
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


export const fetchUserPosts = ({ userId }) => {
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



export const fetchUserTransactions = ({ userId }) => {
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