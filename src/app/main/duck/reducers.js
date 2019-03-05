import { createAction, /* createAction */ handleActions } from 'redux-actions';
import { fromJS /* Map, OrderedMap */ } from 'immutable';
import orders from '../../../assets/orders';
import materials from '../../../assets/materials';

//
// export const SHO = createAction(
//     '@@OPN_MENU/SWITCH_PAGE',
//     (page) => ({ page }),
// );

const defaultState = fromJS({ orders: orders, news: { ...orders }, materials: materials });

const managerReducer = handleActions({}, defaultState);

export default managerReducer;
