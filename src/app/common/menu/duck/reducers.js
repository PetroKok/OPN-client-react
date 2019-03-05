import { createAction, handleActions, combineActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';
import { pagesConst, footerMapConst } from '../../../../consts';

export const switchToPage = createAction(
    '@@OPN_MENU/SWITCH_PAGE',
    (page) => ({ page }),
);

// export const reset = createAction('menu/HOME');

const defaultState = Map({ pages : pagesConst, footerMap: footerMapConst});

const builderReducer = handleActions(
  {
    // [combineActions(increment, decrement)](state, { payload: { amount } }) {
    //   return state.set('counter', state.get('counter') + amount);
    // },
    // [reset]: () => defaultState,
      [switchToPage] (state, {
          payload: { page },
      }) {
          return state.removeIn(['pages', state.get('pages').findIndex(item => item.selected === true), 'selected'])
              .mergeDeepIn(['pages', state.get('pages').findIndex(item => item.page === page)], fromJS({ 'selected' : true }));
      }
  },
  defaultState,
);

export default builderReducer;
