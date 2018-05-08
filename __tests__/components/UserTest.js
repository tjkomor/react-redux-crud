import React from 'react';
import { shallow, configure, mount, render } from 'enzyme';
import User from '../../src/components/User';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('User Component', () => {
  it('should render', () => {
   const wrapper = shallow(<User store={{getState: jest.fn()}}/>)

   expect(wrapper.length).toBe(1)
  })

})
