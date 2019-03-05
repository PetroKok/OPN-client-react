import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router/immutable';
import { reducer as formReducer } from 'redux-form';
import menuReducer from './app/common/menu/duck';
import ordersReducer from './app/main/duck';
import loginReducer from './app/login/duck';

// import {
//   loginSagaReducer,
//   logoutSagaReducer,
//   registerSagaReducer,
//   recoveryPasswordSagaReducer,
// } from "./api/sagas";

// const rootReducer = formReducer;

const rootReducer = (history:any) => combineReducers({
  router: connectRouter(history),
  form: formReducer,
  menu: menuReducer,
  market: ordersReducer,
  login: loginReducer,
  // user: {
  // user_login: loginSagaReducer,
  // logout: logoutSagaReducer,
  // register: registerSagaReducer,
  // recovery: recoveryPasswordSagaReducer,
  // }
});

export default rootReducer;
