import React from 'react';
import { shallow } from 'enzyme'

import { InputEdit } from './InputEdit.jsx'


describe('InputEdit', () => {

  const props = {
    id: 1,
    content: 'qwe'
  };

  describe('initial', () => {
    const wrapper = shallow(<InputEdit {...props} />);

    it('renders properly', () => expect(wrapper).toMatchSnapshot());
  });

  describe('method onChange', () => {
    const
      wrapper = shallow(<InputEdit {...props} />),
      value = '123';

    wrapper.setState({
      isEdit: true,
      value: ''
    });

    wrapper.find('TextArea').simulate('change', { target: { value } });

    it('renders properly', () => expect(wrapper).toMatchSnapshot());
    it('state.value updated', () => expect(wrapper.state().value).toEqual(value));
  });

  describe('method updateTask without state.value', () => {
    const
      mockUpdateTask = jest.fn(),
      mockSaveTasks = jest.fn(),
      nextProps = {
        ...props,
        updateTask: mockUpdateTask,
        saveTasks: mockSaveTasks
      },
      wrapper = shallow(<InputEdit {...nextProps} />);

    wrapper.setState({
      isEdit: true,
      value: ''
    });

    wrapper.instance().updateTask();

    it('renders properly', () => expect(wrapper).toMatchSnapshot());
    it('state.value updated to props.content', () => expect(wrapper.state().value).toEqual(nextProps.content));
    it('updateTask didn\'t call', () => expect(mockUpdateTask).not.toHaveBeenCalled());
    it('saveTasks didn\'t call', () => expect(mockSaveTasks).not.toHaveBeenCalled());
  });

  describe('method updateTask with state.value', () => {
    const
      mockUpdateTask = jest.fn(),
      mockSaveTasks = jest.fn(),
      nextProps = {
        ...props,
        updateTask: mockUpdateTask,
        saveTasks: mockSaveTasks
      },
      wrapper = shallow(<InputEdit {...nextProps} />);

    wrapper.setState({
      isEdit: true,
      value: 'qwe'
    });

    wrapper.instance().updateTask();

    it('renders properly', () => expect(wrapper).toMatchSnapshot());
    it('state.isEdit updated', () => expect(wrapper.state().isEdit).toEqual(false));
    it('updateTask called', () => expect(mockUpdateTask).toHaveBeenCalled());
    it('saveTasks called', () => expect(mockSaveTasks).toHaveBeenCalled());
  });

  describe('method openEdit', () => {
    const wrapper = shallow(<InputEdit {...props} />);

    wrapper.setState({ isEdit: false });

    wrapper.find('Button').simulate('click');

    it('renders properly', () => expect(wrapper).toMatchSnapshot());
    it('state.isEdit updated', () => expect(wrapper.state().isEdit).toEqual(true));
  });

  describe('method closeEdit', () => {
    const wrapper = shallow(<InputEdit {...props} />);

    wrapper.setState({
      isEdit: true,
      value: 'asd'
    });

    wrapper.find('Button').simulate('click');

    it('renders properly', () => expect(wrapper).toMatchSnapshot());
    it('state.isEdit updated', () => expect(wrapper.state().isEdit).toEqual(false));
    it('state.value updated', () => expect(wrapper.state().value).toEqual(props.content));
  });

});
