const LOAD_GROUPS = 'groups/getGroups';
const SET_GROUP = 'groups/setGroup';

export const getGroups = (groups, id) => ({
    type: LOAD_GROUPS,
    payload: groups,
    id,
});

export const setGroup = (group) => ({
    type: SET_GROUP,
    payload: group,
});

export const getUserGroups = (id) => async (dispatch) => {
    const res = await fetch(`/api/users/${id}/groups`);
    const groups = await res.json();
    dispatch(getGroups(groups, id));
};

export const createGroup = (groupData, id) => async (dispatch) => {
    // const { name, type } = groupData;
    const res = await fetch(`/api/users/${id}/groups`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            groupData
            // name,
            // type,
        ),
    });
    const data = await res.json();
    return dispatch(setGroup(data));
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
        case LOAD_GROUPS:
            action.groups.forEach((group) => {
                newState[group.id] = group;
            });
            return newState;
        case SET_GROUP:
            newState[action.payload.id] = action.payload
            return newState;
        default:
            return state
    }
};

export default groupsReducer;
