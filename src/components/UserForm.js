import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/UserActions';

class UserForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const firstName = this.getFirstName.value;
    const lastName =  this.getLastName.value;
    const address =  this.getAddress.value;

    const data = {
      id: new Date(),
      firstName,
      lastName,
      address,
      editing:false
    }

    if (firstName.length > 0 && lastName.length > 0 && address.length > 0){
      this.props.actions.addUser({ type:'ADD_USER', data });
      console.log(this.props)
      this.props.history.push("/index")
    } else {
      alert("All fields must be filled out");
    }
  }

render() {
  return (
    <div>
      <Link className="all-users" to="/index">All Users</Link>
      <h1>Create User</h1>
      <form onSubmit={this.handleSubmit}>
       <input type="text" ref={(input)=>this.getFirstName = input}
        placeholder="First Name"/>
       <br /><br />
       <input ref={(input)=>this.getLastName = input}
        placeholder="Last Name" />
       <br /><br />
       <input ref={(input)=>this.getAddress = input}
        placeholder="Address" />
       <br /><br />
       <button className="create-button">Create User!</button>
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

export default withRouter(connect(null, mapDispatchToProps)(UserForm));
