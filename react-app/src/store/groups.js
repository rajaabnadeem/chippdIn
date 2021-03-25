const LOAD_GROUPS = 'groups/getGroups';
const SET_GROUP = 'groups/setGroup';

export const setGroup = (group) => ({
    type: SET_GROUP,
    payload: group,
});

export const getUserGroups = (id) => async (dispatch) => {
    const res = await fetch(`/api/groups/${id}`);
    const groups = await res.json();
    dispatch(setGroup(groups));
    return groups;
};

export const createGroup = (groupData) => async (dispatch) => {
    // const { name, type } = groupData;
    const res = await fetch(`/api/groups`, {
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
    let newState;
    switch (action.type) {
        case SET_GROUP:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default groupsReducer;
