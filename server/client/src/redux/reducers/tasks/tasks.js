import { types as t } from '../../actions/tasks/tasks';


export const initState = {
  tasks: [
    { id: 1, content: 'Task 1' },
    { id: 2, content: 'Task 2' },
    { id: 3, content: 'Task 3' }
  ],
  loading: false,
  error: null
};


export default (state = initState, { type, payload }) => {

  switch (type) {

    case t.GET_TASKS_REQUEST:
      return { ...state, loading: true };

    case t.GET_TASKS_SUCCESS:
      return { ...state, loading: false, tasks: [...payload] };

    case t.GET_TASKS_FAIL:
      return { ...state, loading: false, error: payload };

    case t.ADD_TASK:
      return { ...state, tasks: [payload, ...state.tasks] };

    case t.TOGGLE_DONE_STATUS:
      const task = state.tasks.find(i => i.id === payload);
      task.isDone = !task.isDone;
      return { ...state, tasks: [...state.tasks] };

    case t.UPDATE_TASK:
      const updateTask = state.tasks.find(i => i.id === payload.id);
      updateTask.content = payload.content;
      return { ...state, tasks: [...state.tasks] };

    case t.REMOVE_TASK:
      const newTasks = state.tasks.filter(i => i.id !== payload);
      return { ...state, tasks: [...newTasks] };

    case t.SORT_TASKS:
      return { ...state, tasks: [...payload] };

    default:
      return state;

  }

};
