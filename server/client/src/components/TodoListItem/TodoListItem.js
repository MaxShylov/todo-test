import React from 'react';
import PropTypes from 'prop-types';
import { SortableElement } from 'react-sortable-hoc';
import Input from 'antd/lib/input'

import './TodoListItem.scss';
import BtnRemoveTask from '../buttons/BtnRemoveTask/BtnRemoveTask';
import BtnToggleDoneStatus from '../buttons/BtnToggleDoneStatus/BtnToggleDoneStatus';
import InputEdit from '../InputEdit/InputEdit';

const { number, bool, string} = PropTypes;
const InputGroup = Input.Group;

TodoListItem.propTypes = {
  id: number.isRequired,
  isDone: bool,
  content: string
};


export function TodoListItem(props) {

  const { isDone, id, content } = props;

  return (
    <div className="TodoListItem">
      <InputGroup compact>
        <BtnToggleDoneStatus isDone={isDone} id={id} />
        <InputEdit content={content} id={id} />
        <BtnRemoveTask id={id} />
      </InputGroup>
    </div>
  );
}


export default SortableElement(TodoListItem);
