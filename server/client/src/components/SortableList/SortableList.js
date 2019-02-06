import React from 'react';
import PropTypes from 'prop-types';

import { SortableContainer } from 'react-sortable-hoc';
import TodoListItem from '../TodoListItem/TodoListItem';


const { array } = PropTypes;

SortableList.propTypes = {
  tasks: array
};


function SortableList(props) {
  const { tasks } = props;

  return (
    <div>
      {tasks.map((i, k) => (
        <TodoListItem key={i.id} index={k} {...i} />
      ))}
    </div>
  );
}


export default SortableContainer(SortableList)
