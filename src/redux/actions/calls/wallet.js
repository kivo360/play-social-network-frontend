import { ADD_POST, DELETE_POST, FETCH_POST } from '../types';
import axios from 'axios';

const apiUrl = 'http://localhost:5000';

export const getWalletInfo = ({ title, body }) => {
    const jwtKey = ''; // Should get from the localStorage
    // return (dispat ch) => {
    //   return axios.post(`${apiUrl}/publish`, {title, body})
    //     .then(response => {
    //       dispatch(createPostSuccess(response.data))
    //     })
    //     .catch(error => {
    //       throw(error);
    //     });
    // };
};


export const createWallet = ({ title, body }) => {
    const jwtKey = ''; // Should get from the localStorage
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