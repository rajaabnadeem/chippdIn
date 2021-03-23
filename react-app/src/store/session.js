const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';

export const setUser = (user) => {
    return {
        type: SET_USER,
        user,
    };
};

export const removeUser = () => {
    return {
        type: REMOVE_USER,
    };
};

export const authenticate = () => async (dispatch) => {
    const res = await fetch('/api/auth/');
    const data = await res.json();
    return dispatch(setUser(data));
};

export const login = (user) => async (dispatch) => {
    const { email, password } = user;
    const res = await fetch('/api/auth/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });
    const data = await res.json();
    return dispatch(setUser(data));
};

export const logout = () => async (dispatch) => {
    const res = await fetch('/api/auth/logout/');
    return dispatch(removeUser());
};

export const signUp = (user) => async (dispatch) => {
    const { firstName, lastName, email, password } = user;
    const res = await fetch('/api/auth/signup/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstName,
            lastName,
            email,
            password,
        }),
    });
    const data = await res.json();
    return dispatch(setUser(data));
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_USER:
            newState = Object.assign({}, state);
            newState.user = action.payload;
            return newState;
        case REMOVE_USER:
            newState = Object.assign({}, state);
            newState.user = null;
            return newState;
        default:
            return state;
    }
};

export default sessionReducer;
