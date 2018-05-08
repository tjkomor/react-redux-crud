import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import EditUser from '../../src/components/EditUser';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Edit User', () => {
  it('should render', () => {
   const wrapper = shallow(<EditUser store={{getState: jest.fn()}}/>)
   expect(wrapper.length).toBe(1)
  })

  it('should call handleEdit on submit', () => {
    const mockFn = jest.fn()
    const user = {firstName: "tyler", lastName: "komoroske", address: "1234"}
    const wrapper = mount(<EditUser store={{getState: jest.fn()}} user={user}/>)
    wrapper.find('.update-button').simulate(
      'click',
      {preventDefault() {}}
    )
    expect(mockFn).toHaveBeenCalled();
  })
})
