import { createSlice } from 'redux-starter-kit';

// import { SET_USER_INFO, CLEAR_USER_INFO, ERROR_USER_INFO } from './consts';


const user = createSlice({
    initialState: {user: {}, userSet: false},
    reducers: {
        setUserInfo: (state, action) => { 
            state.user = action.payload; 
            state.userSet = true;
        },
        clearUserInfo: (state, action) => { 
            state.user = {}
            state.userSet = false;
        }
    }
});
  
  

export default user;