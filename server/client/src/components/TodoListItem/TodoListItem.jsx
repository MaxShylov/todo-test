import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button/button';
import { SortableElement } from 'react-sortable-hoc';

import './TodoListItem.scss';
import Icon from 'antd/lib/icon';
import { removeTask, toggleDoneStatus, updateTask } from '../../redux/actions/tasks/tasks';
import Tooltip from 'antd/lib/tooltip';

const { number, bool, string, func } = PropTypes;
const InputGroup = Input.Group;


class TodoListItem extends Component {
  static propTypes = {
    id: number.isRequired,
    isDone: bool,
    connect: string,

    // redux
    toggleDoneStatus: func
  };

  state = {
    isEdit: false,
    value: this.props.content
  };

  onChange = (e) => this.setState({ value: e.target.value });

  updateTask = () => {
    const
      { updateTask, id } = this.props,
      { value } = this.state;

    if (!value) return this.closeEdit();

    updateTask({ id, content: value });

    this.setState({ isEdit: false });
  };

  openEdit = () => this.setState({ isEdit: true });

  closeEdit = () => this.setState({
    isEdit: false,
    value: this.props.content
  });

  toggleDoneStatus = () => this.props.toggleDoneStatus(this.props.id);

  removeTask = () => this.props.removeTask(this.props.id);

  render() {
    const
      { isEdit, value } = this.state,
      { isDone } = this.props;


    return (
      <div className="TodoListItem">
        <InputGroup compact>
          <Tooltip placement="top" title={`Mark as ${!isDone ? '' : 'not'} done`}>
            <Button
              type="primary"
              icon={!isDone ? 'clock-circle' : 'check'}
              onClick={this.toggleDoneStatus}
            />
          </Tooltip>

          {
            !isEdit
              ? (<div className="text">{value}</div>)
              : (
                <Input.TextArea
                  autosize
                  value={value}
                  disabled={!isEdit}
                  onChange={this.onChange}
                  onPressEnter={this.updateTask}
                />
              )
          }

          <Tooltip placement="top" title={`${!isEdit ? 'Open' : 'Close'} edit`}>
            <Button
              type="primary"
              icon={!isEdit ? 'edit' : 'close'}
              onClick={!isEdit ? this.openEdit : this.closeEdit}
            />
          </Tooltip>

          <Tooltip placement="top" title='Remove tast'>
            <Button
              type="primary"
              icon="delete"
              onClick={this.removeTask}
            />
          </Tooltip>
        </InputGroup>
      </div>
    );
  }
}


const mapStateToProps = state => ({});

const matchDispatchToProps = dispatch => bindActionCreators({
  toggleDoneStatus,
  updateTask,
  removeTask
}, dispatch);

export default SortableElement(connect(mapStateToProps, matchDispatchToProps)(TodoListItem));
