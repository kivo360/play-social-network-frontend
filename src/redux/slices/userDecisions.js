import { createSlice } from 'redux-starter-kit';

  

const pdecisions = createSlice({
    initialState: {
        viewWelcome: true
    },
    reducers: {
        removeWelcome: (state, action) => {
            state.viewWelcome = false;
        }
    }
  })
  

export default pdecisions;