import { /* createAction */ handleActions } from 'redux-actions';
import { fromJS /* Map, OrderedMap */ } from 'immutable';

const defaultState = fromJS({});

const managerReducer = handleActions({}, defaultState);

export default managerReducer;
