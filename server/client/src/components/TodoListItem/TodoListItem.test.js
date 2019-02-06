import React from 'react';
import { shallow } from 'enzyme'

import { TodoListItem } from './TodoListItem.js'


describe('TodoListItem', () => {

  const props = {
    id: 1
  };

  describe('initial', () => {
    const wrapper = shallow(<TodoListItem {...props} />);

    it('renders properly', () => expect(wrapper).toMatchSnapshot());
  });

});
