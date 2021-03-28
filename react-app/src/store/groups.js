// const LOAD_GROUPS = 'groups/getGroups';
const SET_GROUP = 'groups/setGroup';
// const SET_USERGROUP = 'groups/setUserGroup';

// Action creators:
const setGroup = (group) => ({
    type: SET_GROUP,
    group,
});

// const setUserGroup = (userGroup) => ({
//     type: SET_USERGROUP,
//     userGroup,
// });


// Thunk actions:
export const getUserGroups = (user_id) => async (dispatch) => {
    const res = await fetch(`/api/users/${user_id}/groups/`);
    const data = await res.json();
    // console.log(data)
    dispatch(setGroup(data));
};

export const createUserGroup = (groupId, email) => async (dispatch) => {
    console.log(groupId, email);

    const res = await fetch(`/api/groups/${groupId}/user-groups/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
    });
    // const data = await res.json();
};

export const createGroup = (groupData, id) => async (dispatch) => {
    const res = await fetch(`/api/users/${id}/groups/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(groupData),
    });
    const data = await res.json();
    dispatch(setGroup({ [data.id]: data }));
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
    // console.log(data);
    return dispatch(setGroup(data));
};


// Reducer:
const groupsReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_GROUP:
            return { 
                ...state,
                ...action.group
            }
        default:
            return state;
    }
};
export default groupsReducer;

