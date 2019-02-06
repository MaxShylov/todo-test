import reducer, { initState } from './tasks'
import { types as t } from '../../actions/tasks/tasks';


describe('reducer tasks', () => {

  it('GET_TASKS_REQUEST', () => {
    const action = {
      type: t.GET_TASKS_REQUEST
    };

    expect(reducer(initState, action)).toEqual({
      ...initState,
      loading: true
    })
  });

  it('GET_TASKS_SUCCESS', () => {
    const action = {
      type: t.GET_TASKS_SUCCESS,
      payload: [{ id: 1 }, { id: 2 }, { id: 3 }]
    };

    expect(reducer(initState, action)).toEqual({
      ...initState,
      loading: false,
      tasks: action.payload
    })
  });

  it('GET_TASKS_FAIL', () => {
    const action = {
      type: t.GET_TASKS_FAIL,
      payload: 'error'
    };

    expect(reducer(initState, action)).toEqual({
      ...initState,
      loading: false,
      error: action.payload
    })
  });

  it('ADD_TASK', () => {
    const action = {
      type: t.ADD_TASK,
      payload: { id: 4 }
    };

    initState.tasks = [{ id: 1 }, { id: 2 }, { id: 3 }];

    expect(reducer(initState, action)).toEqual({
      ...initState,
      tasks: [action.payload, ...initState.tasks]
    })
  });

  it('TOGGLE_DONE_STATUS', () => {
    const action = {
      type: t.TOGGLE_DONE_STATUS,
      payload: 2
    };

    initState.tasks = [{ id: 1, isDone: false }, { id: 2, isDone: false }];

    expect(reducer(initState, action)).toEqual({
      ...initState,
      tasks: [{ id: 1, isDone: false }, { id: 2, isDone: true }]
    })
  });

  it('UPDATE_TASK', () => {
    const action = {
      type: t.UPDATE_TASK,
      payload: { id: 1, content: 'asd' }
    };

    initState.tasks = [{ id: 1, content: 'qwe' }, { id: 2, content: 'qwe' }];

    expect(reducer(initState, action)).toEqual({
      ...initState,
      tasks: [{ id: 1, content: 'asd' }, { id: 2, content: 'qwe' }]
    })
  });

  it('REMOVE_TASK', () => {
    const action = {
      type: t.REMOVE_TASK,
      payload: 2
    };

    initState.tasks = [{ id: 1 }, { id: 2 }, { id: 3 }];

    expect(reducer(initState, action)).toEqual({
      ...initState,
      tasks: [{ id: 1 }, { id: 3 }]
    })
  });

  it('SORT_TASKS', () => {
    const action = {
      type: t.SORT_TASKS,
      payload: [{ id: 2 }, { id: 3 }, { id: 1 }]
    };

    initState.tasks = [{ id: 1 }, { id: 2 }, { id: 3 }];


    expect(reducer(initState, action)).toEqual({
      ...initState,
      tasks: action.payload
    })
  });

});
