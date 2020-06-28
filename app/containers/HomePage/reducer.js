import { fromJS } from 'immutable';
import * as ActionTypes from './constants';

const initialState = fromJS({
  showForm: true,
  showResult: false,
});

function homepageReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SHOW_FORM: {
      return state.set('showForm', true).set('showResult', false);
    }
    case ActionTypes.SHOW_RESULT: {
      return state.set('showForm', false).set('showResult', true);
    }
    default:
      return state;
  }
}

export default homepageReducer;
