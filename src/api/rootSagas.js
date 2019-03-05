import axios from 'axios';
import { createRequestInstance, watchRequests } from 'redux-saga-requests';
import { createDriver } from 'redux-saga-requests-axios';

import { settings } from '../settings';
import LoginSaga from "./sagas/LoginSaga";

function* onRequestSaga(request) {
  yield 1;
  const { console } = window;
  if (process.env.NODE_ENV !== 'production') {
    console.log('API: Request info -', request);
  }
  return request;
}

function* onResponseSaga(response) {
  yield 1;
  const { console } = window;
  if (process.env.NODE_ENV !== 'production') {
    console.log('API: Request success -', response);
  }
  return response;
}

function* onErrorSaga(error) {
  yield 1;
  const { console } = window;
  if (process.env.NODE_ENV !== 'production') {
    console.log('API: Request error -', error);
  }
  return error;
}

function* onAbortSaga(request) {
  yield 1;
  const { console } = window;
  if (process.env.NODE_ENV !== 'production') {
    console.log('API: Request aborted -', request);
  }
  return request;
}

export const axiosInstance = axios.create({
    baseURL: settings.apiUrl,
    withCredentials: false,
  });

export default function* rootSaga() {

  yield createRequestInstance(axiosInstance, {
    onRequest: onRequestSaga,
    onSuccess: onResponseSaga,
    onError: onErrorSaga,
    onAbort: onAbortSaga,
    driver: createDriver(axios),
  });
  yield [
    LoginSaga(),
  ]
  yield watchRequests();
}
