import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button/button';
import Container from '../Container/Container';

import './FormAddTast.scss'
import { addTask } from '../../redux/actions/tasks/tasks';

const { func } = PropTypes;
const InputGroup = Input.Group;


export class FormAddTast extends Component {
  static propTypes = {
    addTask: func
  };

  state = { value: null };

  onChange = (e) => this.setState({ value: e.target.value });

  addTask = () => {
    const { value } = this.state;

    if (!value) return;

    this.props.addTask({
      id: Date.now(),
      isDone: false,
      content: this.state.value
    });

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
  addTask
}, dispatch);

export default connect(null, matchDispatchToProps)(FormAddTast);
