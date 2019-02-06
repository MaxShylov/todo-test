import React from 'react';
import { shallow } from 'enzyme'

import { BtnToggleDoneStatus } from './BtnToggleDoneStatus.js'


describe('BtnToggleDoneStatus', () => {

  const props = {
    id: 1
  };

  describe('initial', () => {
    const wrapper = shallow(<BtnToggleDoneStatus {...props} />);

    it('renders properly', () => expect(wrapper).toMatchSnapshot());
  });

  describe('function toggleStatus', () => {
    const
      mockToggleDoneStatus = jest.fn(),
      nextProps = {
        ...props,
        toggleDoneStatus: mockToggleDoneStatus
      },
      wrapper = shallow(<BtnToggleDoneStatus {...nextProps} />);

    wrapper.find('Button').simulate('click');

    it('renders properly', () => expect(wrapper).toMatchSnapshot());
    it('toggleDoneStatus called', () => expect(mockToggleDoneStatus).toHaveBeenCalled());
  });

});
