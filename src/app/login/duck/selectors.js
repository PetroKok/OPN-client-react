// import { createSelector } from 'reselect';

const getLoginStatus = state => state.get('loginStatus');
const getCompanyName = state => state.getIn(['user', 'company_name']);

export default {
  getLoginStatus,
  getCompanyName,
};
