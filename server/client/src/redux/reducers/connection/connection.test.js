import reducer, { initState } from './connection'
import { types as t } from '../../actions/connection/connection';


describe('reducer connection', () => {

  it('SET_STATUS', () => {
    const action = {
      type: t.SET_STATUS,
      payload: true
    };

    expect(reducer(initState, action)).toEqual({
      ...initState,
      onLine: action.payload
    })
  });
});
