import React from 'react';
import { shallow } from 'enzyme'

import { Info } from './Info.js'


describe('Info', () => {

  const props = {
    onLine: true
  };

  describe('initial', () => {
    const wrapper = shallow(<Info {...props} />);

    it('renders properly', () => expect(wrapper).toMatchSnapshot());
  });

});
