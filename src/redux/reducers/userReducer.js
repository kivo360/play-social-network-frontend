export default (state = {}, action) => {
    switch (action.type) {
        case 'GET_USER_INFORMATION':
        // Should call the actor to get the user's information
        return {
            ...state
        }
        case 'SET_USER_INFORMATION':
        // Should call the actor to get the user's information
        // Set the user information
        console.log(action);
        return {
            user: action.payload,
            ...state
        }
        case 'ERROR_USER_INFO':
        return {
            // Put an error state here
            ...state
        }
        default:
            return state
    }
}