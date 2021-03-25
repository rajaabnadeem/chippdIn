const LOAD = 'comments/load'

export const loadComments = (comments) => ({
    type: LOAD,
    payload: comments,
  })

export const getComments = (user_id) => async (dispatch) => {
    console.log('Here')
    const response = await fetch(`/api/users/${user_id}/comments`)
    return dispatch(loadComments(response))
}

const initialState = []

const commentsReducer = (state = initialState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type){
        case LOAD:
            console.log(action.payload)

            return newState
        default:
            return state
    }
}

export default commentsReducer
