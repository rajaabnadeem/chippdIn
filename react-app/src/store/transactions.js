import { loadExpenses } from './expenses';

const LOAD_TRANS = 'transactions/loadTransactions';

export const loadTransactions = (transactions) => ({
    type: LOAD_TRANS,
    payload: transactions,
});

export const getTransactions = (user_id, group_id) => async (dispatch) => {
    const res = await fetch(
        `/api/users/${user_id}/groups/${group_id}/transactions/`
    );
    const data = await res.json();
    return dispatch(loadExpenses(data));
};

const initialState = {};

const transactionsReducer = (state = initialState, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case LOAD_TRANS:
            newState[action.payload.id] = action.payload;
            return newState;
        default:
            return state;
    }
};

export default transactionsReducer;
