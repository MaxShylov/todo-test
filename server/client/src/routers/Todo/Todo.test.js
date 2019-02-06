import React from 'react';
import { shallow } from 'enzyme'

import Todo from './Todo.js'


describe('Todo', () => {

  describe('initial', () => {
    const wrapper = shallow(<Todo />);

    it('renders properly', () => expect(wrapper).toMatchSnapshot());
  });

});
