import { expect } from 'chai';
import UserActions from './UserAction';

const { getUsersAction, addUserAction, editUserAction, deleteUserAction } = UserActions;

const param = {
    userId: 'BOB123',
    userName: 'BOB BILLY',
    userRole: 'MANAGER',
}

describe('Test for UserActions', () => {
    it('Checking getUsersAcion method', () => {
        const returnVal = {
            type: 'GET_USERS_ACTION',
        }
        expect(getUsersAction()).to.deep.equal(returnVal);
    });

    it('Checking addUserAction method', () => {
        const returnVal = {
            type: 'ADD_USERS_ACTION',
            payload: param,
        }
        expect(addUserAction(param)).to.deep.equal(returnVal);
    });

    it('Checking editUserAction method', () => {
        const returnVal = {
            type: 'EDIT_USERS_ACTION',
            payload: param,
        }
        expect(editUserAction(param)).to.deep.equal(returnVal);
    });

    it('Checking deleteUserAction method', () => {
        const returnVal = {
            type: 'DELETE_USERS_ACTION',
            payload: param,
        }
        expect(deleteUserAction(param)).to.deep.equal(returnVal);
    });
});
