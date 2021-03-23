const LOAD = "expense/load";
const SET_EXPENSE = "expense/setExpense";

export const setExpense = (expense) => ({
  type: SET_EXPENSE,
  payload: expense,
});

const createExpense = (expenseData) => async (dispatch) => {
  const { description, amount, date, notes, user_id, group_id } = expenseData;
  const response = await fetch(
    `/api/users/${user_id}/groups/${group_id}/expense`,
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
    console.log(data)
    return dispatch(setExpense(data));
};

const initialState = {};

const expenseReducer = (state = initialState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case LOAD:
      return newState;

    case SET_EXPENSE:
      return newState;

    default:
      return state;
  }
};

export default expenseReducer;
