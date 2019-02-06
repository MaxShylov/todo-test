import React from 'react';
import PropTypes from 'prop-types';

import { SortableContainer } from 'react-sortable-hoc';
import TodoListItem from '../TodoListItem/TodoListItem';


const { arrayOf, object } = PropTypes;

SortableList.propTypes = {
  tasks: arrayOf(object)
};


export function SortableList(props) {
  const { tasks } = props;

  return (
    <div>
      {tasks && tasks.map((i, k) => (
        <TodoListItem key={i.id} index={k} {...i} />
      ))}
    </div>
  );
}


export default SortableContainer(SortableList)
