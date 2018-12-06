
export const complexAction = () => dispatch => {
    dispatch({
        type: 'COMPLEX_ACTION',
        payload: {'one': {'two': 2, "three": {"placeholder": [1, 2, 3]}}}
    })
}