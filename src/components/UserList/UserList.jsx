import React from 'react';
import PropTypes from 'prop-types';
import './UserList.css';

class UsersList extends React.Component {

	static defaultProps = {
		loadUser: null,
		usersList: [],
	}

	static propTypes = {
		loadUser: PropTypes.func.isRequired,
		usersList: PropTypes.array.isRequired,
	}

	returnUsers = list => {
		const userName = (list || []).map((user) => <li key={user.id} id={user.id} onClick={this.props.loadUser}>{user.name}</li>);
		return userName;
	}

    render() {
		const { usersList } = this.props;
        return (
            <div className='user-list-section'>
                <h3>User List</h3>
                <ul>
                    { this.returnUsers(usersList) }
                </ul>
            </div>
        )
    }
}

export default UsersList;
