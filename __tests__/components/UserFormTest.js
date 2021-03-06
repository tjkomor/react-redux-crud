import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import UserForm from '../../src/components/UserForm';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('UserForm', () => {
  it('should render', () => {
   const mockCreatefn = jest.fn();
   const wrapper = shallow(<UserForm store={{getState: jest.fn()}}/>)

   expect(wrapper.length).toBe(1)
  })

  it('should call the mock create function', () => {
   const mockCreatefn = jest.fn();
   const wrapper = shallow(<UserForm store={{getState: jest.fn(), subscribe: jest.fn()}}/>)
   wrapper.find('.create-button').simulate(
     'click',
     {preventDefault() {}}
   )
   expect(mockCreatefn.mock.calls.length).toBe(1)
  })

  it('add user does not get called if insufficient data', () => {
    const mockAddUser = jest.fn()
    const original = UserForm.prototype.handleEdit()
    UserForm.prototype.handleEdit() = mockAddUser

    const event = {firstName: "tyler", lastName: "", address: "1234"}
    UserForm.prototype.handleEdit(event)

    expect(window.alert).toHaveBeenCalledWith("All fields must be filled out");

    UserForm.prototype.handleEdit() = original
  })

})
