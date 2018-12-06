export default (state = {}, action) => {
    switch (action.type) {
        case 'SET_USER_BILLING':
        return {
            billing: action.payload,
            ...state
        }
        default:
            return state
    }
}