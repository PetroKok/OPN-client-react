const LOGIN_STATE: ViewState = 'sign in';
const REGISTER_STATE: ViewState = 'register';
const DEFAULT_STATE: ViewState = 'default';

export type ViewState = 'sign in' | 'register' | 'default';

export default {
  DEFAULT_STATE,
  LOGIN_STATE,
  REGISTER_STATE,
}