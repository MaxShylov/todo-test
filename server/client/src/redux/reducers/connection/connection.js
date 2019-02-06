import { types as t } from '../../actions/connetcion/connetcion';


export const initState = {
  onLine: false
};


export default (state = initState, { type, payload }) => {

  switch (type) {

    case t.SET_STATUS:
      return { ...state, onLine: payload };

    default:
      return state;

  }

};
