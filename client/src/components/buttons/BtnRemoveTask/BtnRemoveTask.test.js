import React from 'react';
import { shallow } from 'enzyme'

import { BtnRemoveTask } from './BtnRemoveTask.js'


describe('BtnRemoveTask', () => {

  const props = {
    id: 1
  };

  describe('initial', () => {
    const wrapper = shallow(<BtnRemoveTask {...props} />);

    it('renders properly', () => expect(wrapper).toMatchSnapshot());
  });

  describe('function rmTask', () => {
    const
      mockRemoveTask = jest.fn(),
      nextProps = {
        ...props,
        removeTask: mockRemoveTask
      },
      wrapper = shallow(<BtnRemoveTask {...nextProps} />);

    wrapper.find('Button').simulate('click');

    it('renders properly', () => expect(wrapper).toMatchSnapshot());
    it('removeTask called', () => expect(mockRemoveTask).toHaveBeenCalled());
  });

});
