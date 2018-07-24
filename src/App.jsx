import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './App.css';
import UserActions from './actions/UserAction'
import UserList from './components/UserList/UserList';

const { getUsersAction, addUserAction, editUserAction, deleteUserAction } = UserActions;

export class App extends Component {

  static defaultProps = {
    userData: {
      userList: {},
    }
  }

  static propTypes = {
    userData: PropTypes.object,
  }

  constructor() {
    super();
    this.state = {
      userId: '',
      userName: '',
      userRole: '',
      isEmptyValue: false, 
    }
  }

  componentWillMount() {
    this.props.getUsersAction();
  }

  loadUser = (e) => {
    const { usersList = [] } = this.props.userData;
    const currentUser = usersList.find(user => user.id === e.target.id);
    this.setState({
      userId: currentUser.id,
      userName: currentUser.name,
      userRole: currentUser.role,
      isEmptyValue: false,
    });
  }

  clearFormState = () => {
    this.setState({
      userId: '',
      userName: '',
      userRole: '',
    });
  }

  setUserName = (e) => {
    this.setState({
      userName: e.target.value,
    })
  }

  setUserRole = (e) => {
    this.setState({
      userRole: e.target.value,
    });
  }

  addEditUser = () => {
    const { userId, userName, userRole } = this.state;
    if (userName !== '' && userRole !== '') {
      this.setState({
        isEmptyValue: false,
      });
    } else {
      this.setState({
        isEmptyValue: true,
      });
      return;
    }

    if (userId === '') {
      const timestamp = new Date().getUTCMilliseconds();
      const payload = {
        id: userName + timestamp,
        name: userName,
        role: userRole,
      }
      this.props.addUserAction(payload);
    } else {
      const payload = {
        id: userId,
        name: userName,
        role: userRole,
      }
      this.props.editUserAction(payload);
    }
    this.clearFormState();
  }

  deleteUser = () => {
    const { userId, userName, userRole } = this.state;
    if (userId === '') {
      this.setState({
        isEmptyValue: true,
      });
    } else {
      const payload = {
        id: userId,
        name: userName,
        role: userRole,
      }
      this.props.deleteUserAction(payload);
      this.clearFormState();
      this.setState({
        isEmptyValue: false,
      });
    }
  }

 render() {
   const { userName, userRole, isEmptyValue } = this.state;
   const { userData } = this.props;
  const { usersList } = userData;
  return (
   <div className='App'>
      <div>

        <UserList usersList={usersList} loadUser={this.loadUser} />
        
        <div className='user-form-section'>
          <div className='error-message-section'>
            { isEmptyValue && <p className='error-message'>Please select from list or Enter a valid value.</p> }
          </div>
          <div className='form-group'>
            <label className='form-label'>Name</label>
            <input type='text' id='userNameField' className='form-field' value={userName} onChange={this.setUserName} />
          </div>
          <div className='form-group'>
            <label className='form-label'>Role</label>
            <input type='text' id='userRoleField' className='form-field' value={userRole} onChange={this.setUserRole} />
          </div>
          <button className='form-btn' id='deleteBtn' onClick={this.deleteUser}>Delete</button>
          <button className='form-btn' id='submitBtn' onClick={this.addEditUser}>Submit</button>
        </div>
        <div className='clearfix'></div>
      </div>
  </div>
  );
 }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({getUsersAction, addUserAction, editUserAction, deleteUserAction}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);