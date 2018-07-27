export default (state = {}, action) => {
    switch (action.type) {
        case 'GET_USERS_ACTION':
            return { ...state }
        case 'ADD_USERS_ACTION':
            const list = state.usersList;
            list.push(action.payload);
            return {
                usersList: list
            }
        case 'EDIT_USERS_ACTION': 
            const updateList = state.usersList;
            const editId = action.payload.id;
            const currentIndex = updateList.findIndex(item => item.id === editId);
            updateList.splice(currentIndex, 1, action.payload);
            return {
                usersList: updateList,
            }
        case 'DELETE_USERS_ACTION': 
            const deleteList = state.usersList;
            const deleteId = action.payload.id;
            const deleteIndex = deleteList.findIndex(item => item.id === deleteId);
            deleteList.splice(deleteIndex, 1);
            return {
                usersList: deleteList,
            }
        default:
            return state
    }
}
