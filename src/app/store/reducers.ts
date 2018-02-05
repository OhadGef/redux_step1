import {AppState} from './state.model';
import {Action} from './actions';

export const rootReducer = function (state: AppState, action: Action): AppState {
  const newState = Object.assign({}, {
    num: Array.from(state.num)
  });
  newState.num.push(action.payload);
  return newState;
};
