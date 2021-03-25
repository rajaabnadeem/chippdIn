const LOAD = 'comments/load'

export const loadComments = (comments) => ({
    type: LOAD,
    payload: comments,
  })

export const getComments = (expense_id) => async (dispatch) => {
    console.log('Here')
    const response = await fetch(`/api/expenses/${expense_id}/comments`)
    const data = await response.json()
    return dispatch(loadComments(data))
}

const initialState = []

const commentsReducer = (state = initialState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type){
        case LOAD:
            let loadState = []
            for (let comment in action.payload)
            { loadState.push(action.payload[comment]) }
            console.log(action.payload)
            return loadState
        default:
            return state
    }
}

export default commentsReducer
