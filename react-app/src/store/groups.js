const LOAD_GROUPS = 'groups/getGroups'
const SET_GROUP = "groups/setGroup";

export const getGroups = (groups, user_id) => ({
    type: LOAD,
    payload: groups,
    user_id
})

export const setGroup = (group) => ({
  type: SET_GROUP,
  payload: group,
});

export const getUserGroups = (id) => async (dispatch) => {
    const res = await fetch(`/api/users/${id}/groups/`)
    const groups = await res.json()
    dispatch(getGroups(groups, id))
}

export const createGroup = (groupData) => async (dispatch) => {
    const { name, type, img_url, user_id } = groupData
    const res = await fetch(`/api/users/${user_id}/groups/`,
    {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            type,
            img_url,
            user_id
        })
    })
    const data = await res.json()
    return dispatch(setGroup(data))
}

export const editGroup = (groupData) => async (dispatch) => {
    const res = await fetch(`/api/users/${user_id}/group/${id}/`,
    {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(groupData)
    })
    const data = await response.json();
    console.log(data)
    return dispatch(setExpense(data));
}

const initialState = {};

const groupsReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
        case LOAD_GROUPS:
            action.groups.forEach(group => {
                newState[group.id] = group
            })
            return {...state, ...newState};
    }
}

export default groupsReducer
