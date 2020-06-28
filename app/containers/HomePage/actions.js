import * as ActionTypes from './constants';

export function showForm() {
  return {
    type: ActionTypes.SHOW_FORM,
  };
}

export function showResult() {
  return {
    type: ActionTypes.SHOW_RESULT,
  };
}
