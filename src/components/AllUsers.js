import React, { Component } from 'react';
import {connect} from 'react-redux';
import User from './User';
import EditUser from './EditUser'
import { Link } from 'react-router-dom'

class AllUsers extends Component {
  render() {
    return (
    <div>
      <Link className="create-new-user" to="/newUser">Create New User</Link>
      <h1 className="all-users-title">All Users</h1>
      <div className="user-list">
      {this.props.users.map((user) => (
          <div key={user.id}>
            {
              user.editing ?
              <EditUser user={user} key={user.id} /> :
              <User key={user.id} user={user} />
            }
          </div>
        ))}
      </div>
    </div>
    );
   }
}

const mapStateToProps = (state) => {
    return {
        users: state
    }
}

export default connect(mapStateToProps)(AllUsers);
