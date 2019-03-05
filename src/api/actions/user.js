// import { urlsConst } from '@const';
import apiRoutesConst from "../apiRoutesConst";
import { settings } from '../../settings';
import { postDataAction, actionCreator } from "../axios";
import * as actionType from "./actionTypes";
import { loginOperations } from "../../app/login/duck";
// import * as axiosCreator from '../axios';
// import { User as UserMapper } from '../mappers/index';
//
// export const GET_FORM = '@backend/GET_FORM';
// export const POST_FORM = '@backend/POST_FORM';
//
// export function getForm(id) {
//   return {
//     type: GET_FORM,
//     request: axiosCreator.getDataAction(
//       urlsConst.BUILDER,
//       id,
//     ),
//   };
// }
//
// export function postForm(formName, formStructure) {
//   return {
//     type: POST_FORM,
//     request: axiosCreator.postDataAction(
//       urlsConst.BUILDER_POST,
//       UserMapper.toAPI(formName, formStructure),
//     ),
//   };
// }


export const LOGIN_USER = '@@OPN/LOGIN_USER';
export const LOGOUT_USER = '@@OPN/LOGOUT_USER';
export const REGISTER_USER = '@@OPN/REGISTER_USER';
export const RECOVERY_USER_PASSWORD = '@@OPN/RECOVERY_USER_PASSWORD';

// export const loginUser = ({email, password}) => ({
//   type: LOGIN_USER,
//   request: {
//     url: apiRoutesConst.LOGIN,
//     method: 'post',
//     data: {
//       email,
//       password,
//       clientId: settings.clientId,
//     }
//   },
// });


export function login(model) {
  return (dispatch) => {
    dispatch(actionCreator(actionType.REQUEST_BEGIN));
    dispatch(actionCreator(LOGIN_USER));

    // const email = model.email && model.email.toLowerCase();
    // const password = model.password;

    // return postDataAction(email, password)
    return postDataAction(apiRoutesConst.LOGIN,
      { clientId: settings.clientId, ...model },
      { "Content-Type": 'application/json;charset="UTF-8"', })
      .then(response => {
        dispatch(actionCreator(actionType.REQUEST_END));
        dispatch(actionCreator(LOGIN_USER));
        // @ts-ignore
        dispatch(loginOperations.userLogin(response.result));
        return Promise.resolve(response);
      })
      .catch(error => {
        dispatch(actionCreator(actionType.REQUEST_END));
        return Promise.reject(error);
      });
  }
}

export function register(model) {
  return (dispatch) => {
    dispatch(actionCreator(actionType.REQUEST_BEGIN));
    dispatch(actionCreator(REGISTER_USER));

    const jsonModel = {  clientId: settings.clientId, ...model };
    return postDataAction(apiRoutesConst.REGISTER, jsonModel, { "Content-Type": 'application/json;charset="UTF-8"', })
      .then(response => {
        dispatch(actionCreator(actionType.REQUEST_END));
        dispatch(actionCreator(REGISTER_USER));
        // dispatch(setSharedCookie());
      })
      .catch(error => {
        dispatch(actionCreator(actionType.REQUEST_END));
        return Promise.reject(error);
      });
  }
}


export const logoutUser = () => ({
  type: LOGOUT_USER,
  request: { url: apiRoutesConst.LOGOUT },
});

export const registerUser = (formValues) => ({
  type: REGISTER_USER,
  request: { url: apiRoutesConst.REGISTER },
});

export const recoveryUserPassword = () => ({
  type: RECOVERY_USER_PASSWORD,
  request: { url: apiRoutesConst.RECOVERY_PASSWORD },
});