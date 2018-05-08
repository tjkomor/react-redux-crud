import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/UserActions';

class User extends Component {
  render() {
  return (
    <div>
      <p>First Name: {this.props.user.firstName}</p>
      <p>Last Name: {this.props.user.lastName}</p>
      <p>Address: {this.props.user.address}</p>
      <button className="edit-button" onClick={()=>this.props.actions.editUser({type: 'EDIT_USER', id: this.props.user.id})}>Edit</button>
      <button className="delete-button" onClick={()=>this.props.actions.deleteUser({type: 'DELETE_USER', id: this.props.user.id})}>Delete</button>
    </div>
  );
 }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}


export default connect(null, mapDispatchToProps)(User);
