import React from 'react';
import { shallow } from 'enzyme'

import { TodoList } from './TodoList.jsx'


describe('TodoList', () => {

  const props = {
    tasks: [{ id: 1 }, { id: 2 }],
    getTasks: () => null,
    setStatusConnection: () => null
  };

  describe('initial', () => {
    const wrapper = shallow(<TodoList {...props} />);

    it('renders properly', () => expect(wrapper).toMatchSnapshot());
  });

});
