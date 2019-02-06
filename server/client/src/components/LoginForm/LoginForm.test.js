import React from 'react';
import { shallow } from 'enzyme'

import LoginForm from './LoginForm.js'


describe('LoginForm', () => {

  describe('initial', () => {
    const wrapper = shallow(<LoginForm />);

    it('renders properly', () => expect(wrapper).toMatchSnapshot());
  });

});
