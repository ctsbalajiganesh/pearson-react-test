import React from 'react';
import sinon from 'sinon';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import { App } from './App';

import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

describe('Test Coverage for App', () => {
  const userData = {
    usersList: [
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
    ]
  };

  const wrapper = shallow(
    <App userData={userData} getUsersAction={sinon.spy()} />
  );

  it('Check for Initial Render', () => {
    expect(wrapper).to.exist;
  });

  it('Check if UserList getting loaded', () => {
    expect(wrapper.find('UserList')).to.exist;
  });

  it('Check if UserName OnChange triggers setUserName()', () => {
    const e = {
      target:{
        value:'Annie'
      }
    }
    wrapper.find('#userNameField').simulate('onChange');
    expect(wrapper.instance().setUserName(e)).to.have.been.all;
    expect(wrapper.instance().state.userName).to.equal(e.target.value);
  });

  it('Check if UserRole OnChange triggers setUserRole()', () => {
    const e = {
      target:{
        value:'Manager'
      }
    }
    wrapper.find('#userRoleField').simulate('onChange');
    expect(wrapper.instance().setUserRole(e)).to.have.been.all;
    expect(wrapper.instance().state.userRole).to.equal(e.target.value);
  });

  it('Check if Submit Button calls addEditUser()', () => {
    wrapper.find('#submitBtn').simulate('onClick');
    wrapper.setProps({
      addUserAction: sinon.spy(),
    });
    expect(wrapper.instance().addEditUser()).to.have.been.all;
    expect(wrapper.instance().clearFormState()).to.have.been.all;
  });

  it('Check if Delete Button calls deleteUser()', () => {
    wrapper.find('#deleteBtn').simulate('onClick');
    wrapper.setProps({
      deleteUserAction: sinon.spy(),
    });
    expect(wrapper.instance().deleteUser()).to.have.been.all;
    expect(wrapper.instance().clearFormState()).to.have.been.all;
  });
});
