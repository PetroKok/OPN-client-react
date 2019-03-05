import { postDataAction } from "../axios";
import { takeLatest, call } from 'redux-saga/effects';

import { LOGIN_USER } from "../actions/user";

function* loginSaga(props) {
  console.log(`sagafired`);

  const { request: { url, data } } = props;
  const response = yield call(postDataAction, url, data);

  console.log(response);
}


export default function* watchLoginUser() {
  yield takeLatest(LOGIN_USER, loginSaga);
}
