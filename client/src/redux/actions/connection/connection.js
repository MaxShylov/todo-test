import { createTypes } from 'redux-action-types'


export const types = createTypes('Tasks.',
  'SET_STATUS',
);


export const setStatusConnection = (payload) => ({ type: types.SET_STATUS, payload });
