import  React from 'react';
import * as ReactDOM from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
import { Provider } from "react-redux";

import { ConnectedRouter } from  'connected-react-router/immutable';
import configureStore, { history, /*startSaga*/ } from './configureStore';
import registerServiceWorker from './registerServiceWorker';
import App from './app/App';

import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore();
// startSaga();

registerServiceWorker();

const render = Component =>
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Component />
            </ConnectedRouter>
        </Provider>,
        document.getElementById('root') as HTMLElement
    );

render(App);

if (module.hot) {
    module.hot.accept('./app/App', () => {
        const NextApp = require('./app/App').default;
        render(NextApp);
    });
};


