import { createSlice } from 'redux-starter-kit';


const item_list = [
    {
        url: "https://images.unsplash.com/photo-1543699454-f1acfec4adb4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9168756d4728fa1a08cd01503a14e3e7&auto=format&fit=crop&w=634&q=80",
        avatar: "https://farm7.staticflickr.com/6092/6227418584_d5883b0948.jpg",
        title: "Card title 1",
        description: "This is the description 1",
        postId: "1df1eeea-e810-4a85-8f72-9ff748785300"
    },
    {
        url: "https://images.unsplash.com/photo-1543521891-37e42f3ac7bc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e12096e4152ff85eb9a0e627cbc31108&auto=format&fit=crop&w=1350&q=80",
        avatar: "https://farm7.staticflickr.com/6092/6227418584_d5883b0948.jpg",
        title: "Card title 2",
        description: "This is the description 2",
        postId: "2909f882-85f1-4423-a5a4-e064e2f9535c"
    },
    {
        url: "https://images.unsplash.com/photo-1543732967-1311a61777d9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=791d33d883e6376eacd85e052016297b&auto=format&fit=crop&w=1350&q=80",
        avatar: "https://farm7.staticflickr.com/6092/6227418584_d5883b0948.jpg",
        title: "Card title 3",
        description: "This is the description 3",
        postId: "6f20d3fe-ea8f-42af-b4a9-7b6b27e5516f"
    },
    {
        url: "https://images.unsplash.com/photo-1543716627-839b54c40519?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=945402d0832181236e72ad5658c0f340&auto=format&fit=crop&w=1868&q=80",
        avatar: "https://farm7.staticflickr.com/6092/6227418584_d5883b0948.jpg",
        title: "Card title 4",
        description: "This is the description 4",
        postId: "c68f3c9f-c7c3-49d1-bb67-ac35a0644263"
    },
    {
        url: "https://images.unsplash.com/photo-1543709508-c6c0f5f70cb7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7dd93cb78ef40b446c4f8847bb63fb9f&auto=format&fit=crop&w=1905&q=80",
        avatar: "https://farm7.staticflickr.com/6092/6227418584_d5883b0948.jpg",
        title: "Card title 5",
        description: "This is the description 5",
        postId: "bd71f753-45bf-4ac4-9e1e-22bdcfa56d63"
    },
    {
        url: "https://images.unsplash.com/photo-1543686465-5caa01f6b13f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce13c249ee27e7c8b0ba721f51ce1114&auto=format&fit=crop&w=1355&q=80",
        avatar: "https://farm7.staticflickr.com/6092/6227418584_d5883b0948.jpg",
        title: "Card title 6",
        description: "This is the description 6",
        postId: "3b5752bd-76aa-4464-876f-7e2b639549f0"
    }
  ]
  
  

const views = createSlice({
    initialState: {
        currentView: '', 
        homeTabs: '', 
        postTab: '',
        accountTab: '',
        accountPageInfo: {
            transactions: [],
            posts: [],
            activities: []
        },
        isPostList: false, 
        currentPost: {},
        lastRefresh: 0,
        postLists: [],
        homeContent: {
            newPosts: [],
            trending: []
        }
    },
    reducers: {
        setCurrentView: (state, action) => { 
            state.currentView = action.payload; 
        },
        setHomeTab: (state, action) => { 
            
            state.homeTabs = action.payload
        },
        setHomeNew: (state, action) => {
            state.homeContent.newPosts = action.payload
        },
        setHomeTrending: (state, action) => {
            state.homeContent.trending = action.payload
        },
        setAccountTab: (state, action) => { 
            state.accountTab = action.payload
        },
        setAccountTransactions: (state, action) => { 
            state.accountPageInfo.transactions = action.payload
        },
        clearAccountTransactions: (state, action) => { 
            state.accountPageInfo.transactions = []
        },
        setAccountPosts: (state, action) => { 
            state.accountPageInfo.posts = action.payload
        },
        clearAccountPosts: (state, action) => { 
            state.accountPageInfo.posts = []
        },
        setAccountActivites: (state, action) => { 
            state.accountPageInfo.activities = action.payload
        },
        clearAccountActivites: (state, action) => { 
            state.accountPageInfo.activities = []
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
            state.currentPost = action.payload;
        },
        clearCurrentPost: (state, action) => { 
            state.currentPost = {};
        },
        setLastRefresh: (state, action) =>{
            const ts = Math.round((new Date()).getTime() / 1000);
            state.lastRefresh = ts;
        },
        setPostList: (state, action) =>{
            state.postLists = action.payload;
        }

    }
  })
  

export default views;