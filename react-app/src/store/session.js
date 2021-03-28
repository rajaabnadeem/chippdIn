const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

export const setUser = (user) => ({
    type: SET_USER,
    payload: user,
});

export const removeUser = () => ({
    type: REMOVE_USER,
});

export const authenticate = () => async (dispatch) => {
    const response = await fetch('/api/auth/');
    const data = await response.json();
    return dispatch(setUser(data));
};

export const login = (user) => async (dispatch) => {
    const { email, password } = user;
    const response = await fetch('/api/auth/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });
    const data = await response.json();
    return dispatch(setUser(data));
};

export const logout = () => async (dispatch) => {
    await fetch('/api/auth/logout/');
    return dispatch(removeUser());
};

export const signUp = (user) => async (dispatch) => {
    const { first_name, last_name, email, password } = user;
    const response = await fetch('/api/auth/signup/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            first_name,
            last_name,
            email,
            password,
        }),
    });
    const data = await response.json();
    console.log(data);
    return dispatch(setUser(data));
};

export const restoreUser = () => async (dispatch) => {
    const response = await fetch('/api/auth/');
    const data = await response.json();
    dispatch(setUser(data));
    return response;
};

const initialState = { user: {} };

const sessionReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_USER:
            return { ...state, ...{ user: action.payload } };
        case REMOVE_USER:
            newState = Object.assign({}, state);
            newState.user = null;
            return newState;
        default:
            return state;
    }
};

export default sessionReducer;
