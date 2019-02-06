import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from 'antd/lib/input';
import Tooltip from 'antd/lib/tooltip';
import Button from 'antd/lib/button/button';
import { saveTasks, updateTask } from '../../redux/actions/tasks/tasks';

const { number, string, func } = PropTypes;
const TextArea = Input.TextArea

export class InputEdit extends Component {
  static propTypes = {
    id: number.isRequired,
    content: string,
    // redux
    updateTask: func,
    saveTasks: func
  };

  state = {
    isEdit: false,
    value: this.props.content
  };

  onChange = (e) => this.setState({ value: e.target.value });

  updateTask = () => {
    const
      { updateTask, id, saveTasks } = this.props,
      { value } = this.state;

    if (!value) return this.closeEdit();

    updateTask({ id, content: value });

    saveTasks();
    this.setState({ isEdit: false });
  };

  openEdit = () => this.setState({ isEdit: true });

  closeEdit = () => this.setState({
    isEdit: false,
    value: this.props.content
  });


  render() {
    const { isEdit, value } = this.state;

    return (
      <>
        {
          !isEdit
            ? (<div className="text">{value}</div>)
            : (
              <TextArea
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
      </>
    );
  }
}


const matchDispatchToProps = dispatch => bindActionCreators({
  updateTask,
  saveTasks
}, dispatch);

export default connect(null, matchDispatchToProps)(InputEdit);
