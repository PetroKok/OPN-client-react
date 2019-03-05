import { routerMiddleware } from "connected-react-router/immutable";
import * as Immutable from 'immutable';

import {
    applyMiddleware,
    createStore,
    // compose,
} from "redux";

import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga';

import createRootReducer from './reducers';
// import rootSaga, { axiosInstance } from './backend/rootSagas';



export const history = createBrowserHistory();
// const sagaMiddleware = createSagaMiddleware();
// export const startSaga = () => sagaMiddleware.run(rootSaga);

// const middleware = composeWithDevTools(applyMiddleware(
// const middleware = compose(
const middleware = composeWithDevTools(
    applyMiddleware(
        routerMiddleware(history),
        // sagaMiddleware,
        thunk,
        logger,
    ),
);

export default function configureStore (preloadedState?:any) {
    if (!preloadedState) {
        preloadedState = Immutable.Map();
    }
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        middleware,
    );
    if (process.env.NODE_ENV !== 'production') {
        if (module.hot) {
            module.hot.accept('./reducers', () => {
               store.replaceReducer(createRootReducer(history));
            });
        }
    }


    // @ts-ignore
  // sagaMiddleware.run(rootSaga, axiosInstance);

    return store;
};