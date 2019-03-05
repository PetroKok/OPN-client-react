import axios from 'axios';


export function actionCreator(actionType, data = {}) {
  return {
    type: actionType,
    ...data
  };
}

function dataAction(method, url, params = null, headers = {
  // withCredentials: false,
 "Content-Type": 'application/json;charset="UTF-8"',
}) {
  const config = {
    url,
    method,
    params: method === 'get' || method === 'delete' ? params : null,
    data: method === 'put' || method === 'post' || method === 'patch' ? params : null,
    headers: /*Object.entries(headers).length === 0 && headers.constructor === Object */{ ...headers },
  };

  // console.log("FINAL CONFIG", config, "URL", axios.defaults.baseURL, "headers ", headers, "data", config.data);
  return axios.request(config)
    .then(response => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
}

export function getDataAction(url, params = null, headers = {}) {
  return dataAction('get', url, params, headers);
}

export function postDataAction(url, params = null, headers = {}) {
  return dataAction('post', url, params, headers);
}

export function putDataAction(url, params = null, headers = {}) {
  return dataAction('put', url, params, headers);
}

export function deleteDataAction(url, params = null, headers = {}) {
  return dataAction('delete', url, params, headers);
}

export function patchDataAction(url, params = null, headers = {}) {
  return dataAction('patch', url, params, headers);
}
