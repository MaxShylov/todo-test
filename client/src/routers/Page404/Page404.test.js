import React from 'react';
import { shallow } from 'enzyme'

import Page404 from './Page404.js'


describe('Page404', () => {

  describe('initial', () => {
    const wrapper = shallow(<Page404 />);

    it('renders properly', () => expect(wrapper).toMatchSnapshot());
  });

});
