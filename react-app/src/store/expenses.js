const LOAD = "expenses/load";
const SET_EXPENSE = "expenses/setExpense";

export const setExpense = (newExpense) => ({
  type: SET_EXPENSE,
  payload: newExpense,
});

export const loadExpenses = (expenses) => ({
  type: LOAD,
  payload: expenses,
})

export const getExpenses = (user_id, group_id) => async(dispatch) => {
  const response = await fetch(`/api/users/${user_id}/groups/${group_id}/expenses`)
  const data = await response.json()
  return dispatch(loadExpenses(data))
}

export const createExpense = (expenseData) => async (dispatch) => {
  let { description, amount, date, notes, user_id, group_id } = expenseData;
  group_id = 1 
  const response = await fetch(
    `/api/users/${user_id}/groups/${group_id}/expenses/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description,
        amount,
        date,
        notes,
        user_id,
        group_id,
      }),
    }
  );
    const data = await response.json();
    return dispatch(setExpense(data));
};

const initialState = {};

const expensesReducer = (state = initialState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case LOAD:
      for(let expenses in action.payload){
        newState[action.payload[expenses].id] = action.payload[expenses];
      }
      return newState;

    case SET_EXPENSE:
      newState[action.payload.id] = action.payload
      return newState;

    default:
      return state;
  }
};

export default expensesReducer;
