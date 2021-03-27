const LOAD_GROUPS = 'groups/getGroups';
const SET_GROUP = 'groups/setGroup';

export const setGroup = (group) => ({
    type: SET_GROUP,
    payload: group,
});

export const getUserGroups = (user_id) => async (dispatch) => {
    console.log('problem -> ', user_id)
    const res = await fetch(`/api/users/${user_id}/groups/`);
    const groups = await res.json();
        dispatch(setGroup(groups));
};

export const createGroup = (groupData, id) => async (dispatch) => {
    // const { name, type } = groupData;
    const res = await fetch(`/api/users/${id}/groups/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(groupData),
    });
    const data = await res.json();
    dispatch(setGroup(data));
    return data;
};

export const editGroup = (groupData, id) => async (dispatch) => {
    const res = await fetch(`/api/users/${id}/group/${groupData.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(groupData),
    });
    const data = await res.json();
    console.log(data);
    return dispatch(setGroup(data));
};

const initialState = {};

const groupsReducer = (state = initialState, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case SET_GROUP:
            let loadState = {}
            for (let key in action.payload) {
            loadState[action.payload[key].id] = action.payload[key];
            }
            return loadState;
        default:
            return state;
    }
};

export default groupsReducer;
