import React from 'react';
import { shallow } from 'enzyme'

import Container from './Container.js'


describe('Container', () => {

  const props = {
    children: <div>123</div>,
    className: 'class'
  };

  describe('initial', () => {
    const wrapper = shallow(<Container {...props} />);

    it('renders properly', () => expect(wrapper).toMatchSnapshot());
  });

});
