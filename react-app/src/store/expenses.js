const LOAD = "expenses/load";
const SET_EXPENSE = "expenses/setExpense";

export const setExpense = (expense) => ({
  type: SET_EXPENSE,
  payload: expense,
});

export const createExpense = (expenseData) => async (dispatch) => {
  let { description, amount, date, notes, user_id, group_id } = expenseData;
  group_id = 1 
  const response = await fetch(
    `/api/users/${user_id}/groups/${group_id}/expense/`,
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
      return newState;

    case SET_EXPENSE:
      console.log(action.payload)
      newState[action.payload.id] = action.payload
      return newState;

    default:
      return state;
  }
};

export default expensesReducer;
