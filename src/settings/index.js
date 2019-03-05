import local from './local';
import dev from './dev';
import test from './test';
import staging from './staging';
import { getDataAction } from "../api/axios";
import apiRoutesConst from "../api/apiRoutesConst";

const DEV = 'dev';
const TEST = 'test';
const STAGING = 'staging';
export let settings = {};
export const getInitState = () => {
  console.log(` ENVIRONMENT`, process.env.REACT_APP_ENV);
  switch (process.env.REACT_APP_ENV) {
      case DEV: {
        settings = dev;
        break;
      }
      case TEST: {
        settings = test;
        break;
      }
      case STAGING: {
        settings = staging;
        break;
      }
      default: {
        settings = local;
        break;
      }
    }
  console.log(`Settings ...`);
  console.log(settings);
  return { ...settings };
}

export const getClientId = () => {
  getDataAction(apiRoutesConst.CLIENT_ID).then(({result: {clientId}}) => {
    console.log(clientId);
    settings = { ...settings, clientId };
  }).catch(error => console.log(error));
}
export default {
};
