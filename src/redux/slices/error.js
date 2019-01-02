import { createSlice } from 'redux-starter-kit';
import _ from 'lodash';
  

const errorLog = createSlice({
    initialState: {
        errorResponse: {}
    },
    reducers: {
        setError: (state, action) => {
            state.errorResponse = action.payload;
        }
    }
  })
  

export default errorLog;