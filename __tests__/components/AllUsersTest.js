import React from 'react';
import { shallow, configure } from 'enzyme';
import AllUsers from '../../src/components/AllUsers.js';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('All Users', () => {
  it('should render', () => {
   const wrapper = shallow(<AllUsers store={{getState: jest.fn(), subscribe: jest.fn()}}/>)

   expect(wrapper.length).toBe(1)
  })
})
