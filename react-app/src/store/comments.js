const LOAD = "comments/load";
const ADD_COMMENT = "comments/add";

export const loadComments = (comments) => ({
  type: LOAD,
  payload: comments,
});

export const addComment = (comment) => ({
  type: ADD_COMMENT,
  payload: comment,
});

export const getComments = (expense_id, user_id) => async (dispatch) => {
  console.log("Here");
  const response = await fetch(
    `/api/users/${user_id}/expenses/${expense_id}/comments/`
  );
  const data = await response.json();
  return dispatch(loadComments(data));
};

export const createComment = ({ expense_id, user_id, comment }) => async (
  dispatch
) => {
  const response = await fetch(
    `/api/users/${user_id}/expenses/${expense_id}/comments/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment,
      }),
    }
  );
  const data = await response.json();
  return dispatch(addComment(data));
};

const initialState = [];

const commentsReducer = (state = initialState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case LOAD:
      let loadState = [];
      for (let comment in action.payload) {
        loadState.push(action.payload[comment]);
      }
      console.log(action.payload);
      return loadState;
    case ADD_COMMENT:
      newState.push(action.payload);
      console.log(action.payload);
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;
