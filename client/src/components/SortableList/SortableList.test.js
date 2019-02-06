import React from 'react';
import { shallow } from 'enzyme'

import { SortableList } from './SortableList.js'


describe('SortableList', () => {
  const props = {
    tasks: [{ id: 1 }, { id: 2 }, { id: 3 }]
  };

  describe('initial', () => {
    const wrapper = shallow(<SortableList {...props} />);

    it('renders properly', () => expect(wrapper).toMatchSnapshot());
  });

});
