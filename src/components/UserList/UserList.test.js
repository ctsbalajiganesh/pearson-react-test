import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import UserList from './UserList';

import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

describe('Test Coverage for UserList', () => {

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

    const wrapper = shallow(
        <UserList usersList={usersList} loadUser={sinon.spy()} />
    );

    it('Check for Initial Render', () => {
        expect(wrapper).to.exist;
    });

    it('Check if returnUsers method gets called onLoad', () => {
        expect(wrapper.instance().returnUsers()).to.have.been.all;
    });
});
