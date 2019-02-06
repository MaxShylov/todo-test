import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { arrayMove } from 'react-sortable-hoc';
import isEmpty from 'lodash/isEmpty';

import './TodoList.scss'
import SortableList from '../SortableList/SortableList';
import { getTasks, saveTasks, sortTasks } from '../../redux/actions/tasks/tasks';
import Container from '../Container/Container';
import { setStatusConnection } from '../../redux/actions/connection/connection';

const { arrayOf, object, func } = PropTypes;

let intSave = null;


export class TodoList extends Component {
  static propTypes = {
    // redux
    tasks: arrayOf(object).isRequired,
    getTasks: func.isRequired,
    sortTasks: func,
    saveTasks: func,
    setStatusConnection: func.isRequired
  };

  state = {
    tasks: this.props.tasks
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.tasks !== this.state.tasks) {
      this.setState({ tasks: nextProps.tasks });
    }
  }

  componentDidMount() {
    const { getTasks, saveTasks, setStatusConnection } = this.props;

    getTasks();
    setStatusConnection(navigator.onLine);

    if (!intSave) intSave = setInterval(saveTasks, 15000);

    window.addEventListener('beforeunload', () => {
      clearInterval(intSave);
      saveTasks();
    });

    window.addEventListener('online', () => {
      saveTasks();
      setStatusConnection(true)
    });

    window.addEventListener('offline', () => {
      setStatusConnection(false)
    });
  };

  componentWillUnmount() {
    if (intSave) clearInterval(intSave);
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    const
      { tasks } = this.state,
      { sortTasks } = this.props,
      sortedTasks = arrayMove(tasks, oldIndex, newIndex);

    this.setState({ tasks: sortedTasks });
    sortTasks(sortedTasks)
  };

  render() {
    const { tasks } = this.state;

    return (
      <Container className="TodoList">

        <h2>Todo list:</h2>

        {isEmpty(tasks) ? 'No tasks' : (
          <SortableList
            pressDelay={150}
            tasks={tasks}
            onSortEnd={this.onSortEnd}
          />
        )}
      </Container>
    );
  }
}


const mapStateToProps = state => ({
  tasks: state.tasks.tasks
});

const matchDispatchToProps = dispatch => bindActionCreators({
  getTasks,
  sortTasks,
  saveTasks,
  setStatusConnection
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(TodoList);
