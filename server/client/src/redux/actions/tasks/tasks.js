import { asyncAction, createTypes } from 'redux-action-types'
import { ajax } from '../../../api/ajax';
import { URL_TASKS } from '../../../api/routers';


export const types = createTypes('Tasks.',
  asyncAction('GET_TASKS'),
  asyncAction('SAVE_TASKS'),
  'ADD_TASK',
  'TOGGLE_DONE_STATUS',
  'UPDATE_TASK',
  'REMOVE_TASK',
  'SORT_TASKS',
  'SET_INT_SAVE'
);


export const getTasks = () => (dispatch) => {

  dispatch({ type: types.GET_TASKS_REQUEST });

  navigator.onLine
    ? ajax({
      url: URL_TASKS,
      method: 'get',
      cb: res => {
        const
          getTasks = res.data,
          getUpdateAt = res.updateAt,
          localTasks = localStorage.tasks ? JSON.parse(localStorage.tasks) : [],
          localeUpdateAt = localStorage.updateAt,
          tasks = +getUpdateAt > +localeUpdateAt ? getTasks : localTasks;

        dispatch({ type: types.GET_TASKS_SUCCESS, payload: tasks })
      },
      err: err => {
        const localTasks = localStorage.tasks ? JSON.parse(localStorage.tasks) : [];

        dispatch({ type: types.GET_TASKS_FAIL, payload: err });
        dispatch({ type: types.GET_TASKS_SUCCESS, payload: localTasks })
      }
    })
    : (() => {
      dispatch({ type: types.GET_TASKS_FAIL, payload: { message: 'Internet connection is bad' } });
      dispatch({ type: types.GET_TASKS_SUCCESS, payload: localStorage.tasks ? JSON.parse(localStorage.tasks) : [] })
    })()


};

export const saveTasks = () => (dispatch, getState) => {

  dispatch({ type: types.SAVE_TASKS_REQUEST });

  const tasks = getState().tasks.tasks;

  localStorage.setItem('tasks', JSON.stringify(tasks));
  localStorage.setItem('updateAt', Date.now());

  navigator.onLine
    ? ajax({
      url: URL_TASKS,
      data: { tasks },
      cb: res => dispatch({ type: types.SAVE_TASKS_SUCCESS, payload: res.data }),
      err: err => dispatch({ type: types.SAVE_TASKS_FAIL, payload: err })
    })
    : dispatch({ type: types.SAVE_TASKS_FAIL, payload: { message: 'Internet connection is bad' } })

};

export const addTask = (payload) => ({ type: types.ADD_TASK, payload });
export const toggleDoneStatus = (payload) => ({ type: types.TOGGLE_DONE_STATUS, payload });
export const updateTask = (payload) => ({ type: types.UPDATE_TASK, payload });
export const removeTask = (payload) => ({ type: types.REMOVE_TASK, payload });
export const sortTasks = (payload) => ({ type: types.SORT_TASKS, payload });
