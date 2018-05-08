import React, { Component } from 'react';
import UserForm from '../src/components/UserForm';
import AllUsers from '../src/components/AllUsers';
import EditUser from '../src/components/EditUser'
import {Route, Link, BrowserRouter} from 'react-router-dom'

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div className="App">
        <Route path="/edit" component={EditUser} />
        <Route path="/newUser" component={UserForm} />
        <Route path="/index" component={AllUsers} />
        <Route exact path="/" component={AllUsers} />
      </div>
    </BrowserRouter>
    );
  }
}
export default App;
