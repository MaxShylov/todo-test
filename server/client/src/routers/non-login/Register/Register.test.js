import React from 'react';
import { shallow } from 'enzyme'

import Register from './Register.js'


describe('Register', () => {

  describe('initial', () => {
    const wrapper = shallow(<Register />);

    it('renders properly', () => expect(wrapper).toMatchSnapshot());
  });

});
