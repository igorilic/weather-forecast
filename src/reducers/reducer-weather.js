import * as types from '../actions/actions';

export default function(state = null, action) {
  switch(action.type) {
    case types.FETCH_WEATHER:
      return action.payload;
    default:
      return state;
  }
}
