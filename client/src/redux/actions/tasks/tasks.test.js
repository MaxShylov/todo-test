import {
  types as t,
  updateTask,
  addTask,
  removeTask,
  sortTasks,
  toggleDoneStatus,
} from './tasks';


describe('action tasks', () => {

  it('addTask', () => {
    const expectedAction = { type: t.ADD_TASK, payload: 1 };
    expect(addTask(expectedAction.payload)).toEqual(expectedAction)
  });

  it('toggleDoneStatus', () => {
    const expectedAction = { type: t.TOGGLE_DONE_STATUS, payload: 1 };
    expect(toggleDoneStatus(expectedAction.payload)).toEqual(expectedAction)
  });

  it('updateTask', () => {
    const expectedAction = { type: t.UPDATE_TASK, payload: 1 };
    expect(updateTask(expectedAction.payload)).toEqual(expectedAction)
  });

  it('removeTask', () => {
    const expectedAction = { type: t.REMOVE_TASK, payload: 1 };
    expect(removeTask(expectedAction.payload)).toEqual(expectedAction)
  });

  it('sortTasks', () => {
    const expectedAction = { type: t.SORT_TASKS, payload: 1 };
    expect(sortTasks(expectedAction.payload)).toEqual(expectedAction)
  });

});
