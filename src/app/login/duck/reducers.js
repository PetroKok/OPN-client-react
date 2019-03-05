import { combineActions, createActions, createAction, handleActions } from "redux-actions";
import { fromJS /* Map, OrderedMap */ } from 'immutable';


const LOGIN ='@@OPN_LOGIN/USER_LOGIN';
const LOGOUT ='@@OPN_LOGIN/USER_LOGOUT';

// export const { userLogin, userLogout } = createActions({
//   '@@OPN_LOGIN/USER_LOGIN': undefined,
//   '@@OPN_LOGIN/USER_LOGOUT': undefined,
//   // '@@OPN_LOGIN/USER_LOGIN': status => ({status}),
//   // '@@OPN_LOGIN/USER_LOGOUT': status => ({status}),
// });
// //
export const userLogin = createAction(LOGIN, (user) => ({ user }));
export const userLogout = createAction(LOGOUT, (user = null) => ({ user }));

// export const userLogin = createAction(
//   ,
//   (page) => ({ page }),
// );
//
// export const userLogout = createAction(
//   '@@OPN_LOGIN/USER_LOGOUT',
//   (page) => ({ page }),
// );

const defaultState = fromJS({ loginStatus: false, user: null});

const managerReducer = handleActions(
  {
    [combineActions(userLogin, userLogout)]: ( state, {
      payload: { user }
    }) => {
      return state.merge({'loginStatus': !state.get('loginStatus'), user: user});
      // return state.set('loginStatus', !state.get('loginStatus'));
    }
    // [combineActions(userLogin, userLogout)]: ( state, {
    //   payload: { status },
    // }) => {
    //   return state.set('loginStatus', status);
    // }


  },
  defaultState
);

export default managerReducer;
