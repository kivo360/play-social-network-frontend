import { createSlice } from 'redux-starter-kit';



const views = createSlice({
    initialState: {
        currentView: '', 
        homeTabs: '', 
        postTab: '', 
        isPostList: false, 
        currentPost: {}
    },
    reducers: {
        setCurrentView: (state, action) => { 
            state.currentView = action.payload; 
        },
        setHomeTab: (state, action) => { 
            
            state.homeTabs = action.payload
        },
        setPostTab: (state, action) => { 
            // console.log("SHIT");
            state.postTab = action.payload
            state.isPostList = true
        },
        clearPostTab: (state, action) => { 
            state.postTab = '';
            state.isPostList = false;
        },
        setCurrentPost: (state, action) => { 
            state.post = action.payload;
        },
        clearCurrentPost: (state, action) => { 
            state.post = {};
        },
    }
  })
  

export default views;