import { loadExpenses } from './expenses';

const LOAD_TRANS = 'transactions/loadTransactions';

export const loadTransactions = (transactions) => ({
    type: LOAD_TRANS,
    payload: transactions,
});

export const getTransactions = (user_id, group_id) => async (dispatch) => {
    console.log('were hitting this console.log');
    const res = await fetch(
        `/api/users/${user_id}/groups/${group_id}/transactions/`
    );
    const data = await res.json();
    console.log(data);
    return dispatch(loadTransactions(data));
};

const initialState = {};

const transactionsReducer = (state = initialState, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case LOAD_TRANS:
            for (let key in action.payload) {
                const val = action.payload[key];
                newState[key] = val;
            }

            return newState;
        default:
            return state;
    }
};

export default transactionsReducer;
