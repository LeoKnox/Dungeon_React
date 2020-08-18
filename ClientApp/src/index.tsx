import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import configureStore from './store/configureStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
const history = createBrowserHistory({ basename: baseUrl });

// Get the application-wide store instance, prepopulating with state from the server where available.
const store = configureStore(history);

function Test(props: any) {
    return (
        <div>
            <h1>yo! {props.first}!</h1>
            <p>The second is the number {props.second}</p>
            <p>This list has {Object.keys(props).length} {props.third}</p>
        </div>
    )
}

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
            <Test first="Red" second={4} third="items" />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
