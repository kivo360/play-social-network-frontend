
export const getUser = () => dispatch => {
    // Pull the user, then set the user information
    // console.log("\n\n\n\n\n\n\nPlaceholder\n\n\n\n\n\n\n")

    dispatch({
        type: 'GET_USER_INFORMATION', // Begin pulling the user information
        payload: {}
    })
}

export const complexAction = () => dispatch => {
    dispatch({
        type: 'COMPLEX_ACTION',
        payload: {'one': {'two': 2, "three": {"placeholder": [1, 2, 3]}}}
    })
}