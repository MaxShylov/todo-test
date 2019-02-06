import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'antd/lib/button/button';
import Tooltip from 'antd/lib/tooltip';

import { removeTask } from '../../../redux/actions/tasks/tasks';

const { number, func } = PropTypes;


BtnRemoveTask.propTypes = {
  id: number.isRequired,
  // redux
  removeTask: func
};


export function BtnRemoveTask(props) {

  const { removeTask, id } = props;
  const rmTask = () => removeTask(id);

  return (
    <Tooltip placement="top" title='Remove task'>
      <Button
        type="primary"
        icon="delete"
        onClick={rmTask}
      />
    </Tooltip>
  );
}


const matchDispatchToProps = dispatch => bindActionCreators({
  removeTask
}, dispatch);

export default connect(null, matchDispatchToProps)(BtnRemoveTask);
