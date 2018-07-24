
const usersList = [
    {
        id: 'Alice271',
        name: 'Alice',
        role: 'QA',
    },
    {
        id: 'Bob952',
        name: 'Bob',
        role: 'Manager',
    },
    {
        id: 'Martin390',
        name: 'Martin',
        role: 'Developer',
    },
];

const getUsersAction = () => {
    return {
        type: 'GET_USERS_ACTION',
        payload: usersList,
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
