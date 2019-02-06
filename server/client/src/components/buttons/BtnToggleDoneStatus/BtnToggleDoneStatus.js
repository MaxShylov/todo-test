import React  from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'antd/lib/button/button';
import Tooltip from 'antd/lib/tooltip';
import { toggleDoneStatus } from '../../../redux/actions/tasks/tasks';

const { number, bool, func } = PropTypes;


BtnToggleDoneStatus.propTypes = {
  id: number.isRequired,
  isDone: bool,
  // redux
  toggleDoneStatus: func
};


export function BtnToggleDoneStatus(props) {

  const { toggleDoneStatus, id, isDone } = props;
  const toggleStatus = () => toggleDoneStatus(id);

  return (
    <Tooltip
      placement="top"
      title={`Mark as ${!isDone ? '' : 'not'} done`}
    >
      <Button
        type="primary"
        icon={!isDone ? 'clock-circle' : 'check'}
        onClick={toggleStatus}
      />
    </Tooltip>
  );
}


const matchDispatchToProps = dispatch => bindActionCreators({
  toggleDoneStatus
}, dispatch);

export default connect(null, matchDispatchToProps)(BtnToggleDoneStatus);
