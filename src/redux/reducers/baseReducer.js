
export default (state = {userid: 'u2kjfladadwddj9', loading: false, error: false}, action) => {
    switch (action.type) {
        case 'BLANK_ACTION':
        return {
            blank: action.payload, 
            ...state
        }
        case 'COMPLEX_ACTION':
        return {
            complex: action.payload,
            ...state
        }
        default:
            return state
    }
}


