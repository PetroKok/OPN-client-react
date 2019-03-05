// import axios from 'axios';
// import apiRoutesConst from '../apiRoutesConst';
import { requestsReducer } from 'redux-saga-requests';
import { LOGIN_USER, LOGOUT_USER, RECOVERY_USER_PASSWORD, REGISTER_USER } from "../actions/user";
// import { postDataAction } from "../axios";

export const userLoginSagaReducer = requestsReducer({
  actionType: LOGIN_USER,
  getData: (state, action) => ({
    ...action.data,
  }),
  // onRequest: () postDataAction(re)
  // onAbort: [LOGOUT_USER],
});

export const userLogoutSagaReducer = requestsReducer({
  actionType: LOGOUT_USER,
  // onAbort: [LOGOUT_USER],
});

export const userRegisterSagaReducer = requestsReducer({
  actionType: REGISTER_USER,
  // onAbort: [LOGOUT_USER],
});

export const userRecoveryPasswordSagaReducer = requestsReducer({
  actionType: RECOVERY_USER_PASSWORD,
  // onAbort: [LOGOUT_USER],
});