import { expect } from 'chai';
import UserReducer from './UserReducer';

const initialState = {
    usersList: [
        {
            userId: 'Bob111',
            userName: 'Bob',
            userRole: 'Manager',
        },
        {
            userId: 'Martin222',
            userName: 'Martin',
            userRole: 'Developer',
        },
    ]
}


describe('UserReducer Testing', () => {
    it('Check for default state', () => {
        const action = {
            type: '',
        };
        expect(UserReducer({}, action)).to.deep.equal({});
    });

    it('Check for GET_USERS_ACTION type', () => {
        const payload = initialState;
        const action = {
            type: 'GET_USERS_ACTION',
        };
        expect(UserReducer(initialState, action)).to.deep.equal(payload);
    });

    it('Check for ADD_USERS_ACTION type', () => {
        const action = {
            type: 'ADD_USERS_ACTION',
            payload: {
                userId: 'Alice123',
                userName:'Alice',
                userRole:'Senior Developer',
            }
        };
        const addedState = {
            usersList: [
                {
                    userId: 'Bob111',
                    userName: 'Bob',
                    userRole: 'Manager',
                },
                {
                    userId: 'Martin222',
                    userName: 'Martin',
                    userRole: 'Developer',
                },
                {
                    userId: 'Alice123',
                    userName:'Alice',
                    userRole:'Senior Developer',
                },
            ]
        }
        expect(UserReducer(initialState, action)).to.deep.equal(addedState);
    });

    it('Check for EDIT_USERS_ACTION type', () => {
        const action = {
            type: 'EDIT_USERS_ACTION',
            payload: {
                userId: 'Bob111',
                userName:'Bob Billy',
                userRole:'Senior Manager',
            }
        };
        const updatedState = {
            usersList: [
                {
                    userId: 'Bob111',
                    userName:'Bob Billy',
                    userRole:'Senior Manager',
                },
                {
                    userId: 'Martin222',
                    userName: 'Martin',
                    userRole: 'Developer',
                },
                {
                    userId: 'Alice123',
                    userName:'Alice',
                    userRole:'Senior Developer',
                },
            ],
        };
        expect(UserReducer(initialState, action)).to.deep.equal(updatedState);
    });

    // it('Check for DELETE_USERS_ACTION type', () => {
    //     const action = {
    //         type: 'DELETE_USERS_ACTION',
    //         payload: {
    //             userId: 'Bob111',
    //             userName:'Bob Billy',
    //             userRole:'Senior Manager',
    //         },
    //     };
    //     const deletedState = {
    //         usersList: [
    //             {
    //                 userId: 'Martin222',
    //                 userName: 'Martin',
    //                 userRole: 'Developer',
    //             },
    //             {
    //                 userId: 'Alice123',
    //                 userName:'Alice',
    //                 userRole:'Senior Developer',
    //             },
    //         ]
    //     };
    //     console.log(UserReducer(initialState, action));
    //     console.log(deletedState);
    //     expect(UserReducer(initialState, action)).to.deep.equal(deletedState);
    // });
});