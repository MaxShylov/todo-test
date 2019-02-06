import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button/button';
import Container from '../Container/Container';

import './FormAddTast.scss'
import { addTask, saveTasks } from '../../redux/actions/tasks/tasks';

const { func } = PropTypes;
const InputGroup = Input.Group;


export class FormAddTast extends Component {
  static propTypes = {
    addTask: func,
    saveTasks: func
  };

  state = { value: null };

  onChange = (e) => this.setState({ value: e.target.value });

  addTask = () => {
    const
      { addTask, saveTasks } = this.props,
      { value } = this.state;

    if (!value) return;

    let id = Date.now();

    if (process.env.NODE_ENV === 'test') id = 1;

    addTask({
      id,
      isDone: false,
      content: this.state.value
    });

    saveTasks();
    this.setState({ value: null })
  };

  render() {
    const { value } = this.state;

    return (
      <Container className="FormAddTast">
        <InputGroup compact>
          <Input
            value={value}
            onChange={this.onChange}
            onPressEnter={this.addTask}
          />
          <Button onClick={this.addTask}>
            Add task
          </Button>
        </InputGroup>
      </Container>
    );
  }
}


const matchDispatchToProps = dispatch => bindActionCreators({
  addTask,
  saveTasks
}, dispatch);

export default connect(null, matchDispatchToProps)(FormAddTast);
