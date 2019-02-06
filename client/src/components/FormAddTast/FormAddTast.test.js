import React from 'react';
import { shallow } from 'enzyme'

import { FormAddTast } from './FormAddTast.jsx'


describe('FormAddTast', () => {

  describe('initial', () => {
    const wrapper = shallow(<FormAddTast />);

    it('renders properly', () => expect(wrapper).toMatchSnapshot());
  });

  describe('method onChange', () => {
    const
      wrapper = shallow(<FormAddTast />),
      value = 123;

    wrapper.find('Input').simulate('change', { target: { value } });

    it('renders properly', () => expect(wrapper).toMatchSnapshot());
    it('state value changed', () => expect(wrapper.state().value).toEqual(value));
  });

  describe('method addTask without state.value', () => {
    const
      mockAddTask = jest.fn(),
      mockSaveTasks = jest.fn(),
      props = {
        addTask: mockAddTask,
        saveTasks: mockSaveTasks
      },
      wrapper = shallow(<FormAddTast {...props} />);

    wrapper.find('Button').simulate('click');

    it('renders properly', () => expect(wrapper).toMatchSnapshot());
    it('addTask didn\'t call', () => expect(mockAddTask).not.toHaveBeenCalled());
    it('saveTasks didn\'t call', () => expect(mockSaveTasks).not.toHaveBeenCalled());
  });

  describe('method addTask with state.value', () => {
    const
      mockAddTask = jest.fn(),
      mockSaveTasks = jest.fn(),
      props = {
        addTask: mockAddTask,
        saveTasks: mockSaveTasks
      },
      wrapper = shallow(<FormAddTast {...props} />);

    wrapper.setState({ value: 123 });

    wrapper.find('Button').simulate('click');

    it('renders properly', () => expect(wrapper).toMatchSnapshot());
    it('addTask called', () => expect(mockAddTask).toHaveBeenCalled());
    it('saveTasks called', () => expect(mockSaveTasks).toHaveBeenCalled());
    it('state value changed', () => expect(wrapper.state().value).isNull);
  });

});
