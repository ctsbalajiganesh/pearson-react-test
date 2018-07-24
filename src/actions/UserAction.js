
const getUsersAction = () => {
    return {
        type: 'GET_USERS_ACTION',
    };
}

const addUserAction = param => {
    return {
        type: 'ADD_USERS_ACTION',
        payload: param,
    };
}

const editUserAction = param => {
    return {
        type: 'EDIT_USERS_ACTION',
        payload: param,
    };
}

const deleteUserAction = param => {
    return {
        type: 'DELETE_USERS_ACTION',
        payload: param,
    };
}

export default {
    getUsersAction,
    addUserAction,
    editUserAction,
    deleteUserAction,
}
