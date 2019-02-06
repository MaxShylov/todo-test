import React from 'react';
import { shallow } from 'enzyme'

import Login from './Login.js'


describe('Login', () => {

  describe('initial', () => {
    const wrapper = shallow(<Login />);

    it('renders properly', () => expect(wrapper).toMatchSnapshot());
  });

});
