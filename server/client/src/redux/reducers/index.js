import { combineReducers } from 'redux';

import tasks from './tasks/tasks';
import connection from './connection/connection';


export default combineReducers({
  tasks,
  connection
});
