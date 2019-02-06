import React from 'react';
import { shallow, render, mount } from 'enzyme'

import Logout from './Logout.js'


describe('Logout', () => {

  describe('initial', () => {
    const wrapper = shallow(<Logout />);

    it('renders properly', () => expect(wrapper).toMatchSnapshot());
  });

  describe('function logout', () => {
    const
      mockReload = jest.fn(),
      wrapper = mount(<Logout />);

    window.location.reload = mockReload;
    localStorage.setItem('token', '123');

    wrapper.find('Button').simulate('click');

    it('renders properly', () => expect(wrapper).toMatchSnapshot());
    it('localStorage.token deleted', () => expect(localStorage.token).toEqual());
    it('loaction.reload called', () => expect(mockReload).toHaveBeenCalled());
  });

});
