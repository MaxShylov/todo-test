import React from 'react';

import './Todo.scss'
import FormAddTast from '../../components/FormAddTast/FormAddTast';
import TodoList from '../../components/TodoList/TodoList';
import Logout from '../../components/Logout/Logout';
import Info from '../../components/Info/Info';


const Todo = () => (
  <div className="Todo">
    <div>
      <Info />
      <Logout />
    </div>
    <FormAddTast />
    <TodoList />
  </div>
);


export default Todo;
