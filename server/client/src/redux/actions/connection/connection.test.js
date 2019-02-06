import {
  types as t,
  setStatusConnection
} from './connection';


describe('action connection', () => {

  it('setUser()', () => {
    const expectedAction = { type: t.SET_STATUS, payload: true };

    expect(setStatusConnection(expectedAction.payload)).toEqual(expectedAction)
  });

});
