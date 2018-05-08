import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../actions/UserActions';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom'

class EditUser extends Component {

handleEdit = (e) => {
  e.preventDefault();
  const updatedFirstName = this.getFirstName.value;
  const updatedLastName = this.getLastName.value;
  const updatedAddress = this.getAddress.value;
  const data = {
    updatedFirstName,
    updatedLastName,
    updatedAddress
  }
  if (updatedFirstName.length > 0 && updatedLastName.length > 0 && updatedAddress.length > 0){
    this.props.actions.updateUser({ type: 'UPDATE', id: this.props.user.id, data: data }, this.props.dispatch)
    this.props.history.push("/index")
  } else {
    alert("All fields must be filled out");
  }

}
render() {
  return (
    <div>
      <form onSubmit={this.handleEdit}>
        <input required type="text" ref={(input) => this.getFirstName = input}
        defaultValue={this.props.user.firstName} placeholder="Enter First Name" /><br /><br />
        <input type="text" ref={(input) => this.getLastName = input}
        defaultValue={this.props.user.lastName} placeholder="Enter Last Name" /><br /><br />
        <input type="text" ref={(input) => this.getAddress = input}
        defaultValue={this.props.user.address} placeholder="Enter Address" /><br /><br />
        <button className="update-button" id="update-button">Update</button>
          </form>
        </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default withRouter(connect(null, mapDispatchToProps)(EditUser));
