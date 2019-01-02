import { createSlice } from 'redux-starter-kit';

// import { SET_USER_INFO, CLEAR_USER_INFO, ERROR_USER_INFO } from './consts';


const user = createSlice({
    initialState: {user: {}, userSet: false, currentAccount: {}, wallet:{}, isWallet:false, token: ''},
    reducers: {
        setUserInfo: (state, action) => { 
            state.user = action.payload; 
            state.userSet = true;
        },
        clearUserInfo: (state, action) => { 
            state.user = {};
            state.userSet = false;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        clearToken: (state, action) => {
            state.token = '';
        },
        setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload
        },
        clearCurrentAccount: (state, action) => {
            state.currentAccount = {}
        },
        setWalletInfo: (state, action) => {
            state.wallet = action.payload;
            state.isWallet = true;
        },
        clearWalletInfo: (state, action) => {
            state.wallet = {};
            state.isWallet = false;
        }
    }
});
  
  

export default user;