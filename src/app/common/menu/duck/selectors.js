import { createSelector } from 'reselect';

const getPages = state => state.get('pages');

const getFooterMap = state => state.get('footerMap');
//
// const getCurrentPage = createSelector(
//   [getPages],
//   page => page.selected === true,
// );
//
// const isFirstPage = createSelector(
//   [getPages],
//   page => page.first === true,
// );

export default {
    getPages,
    getFooterMap,
    // getCurrentPage,
    // isFirstPage,
};
