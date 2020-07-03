import React from 'react';
import ReactDOM from 'react-dom';
import Todolist from "./Todolist";
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store/index'

const App = (
    <Provider store={store}>
        <Todolist />
    </Provider>
);

ReactDOM.render(
    <React.StrictMode>
        {App}
    </React.StrictMode>,
    document.getElementById('root')
);
// ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
