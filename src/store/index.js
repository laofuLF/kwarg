import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'
import reducer from "./reducer";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

// create store with a reducer
const store = createStore(reducer, enhancer);
// then run the saga
sagaMiddleware.run(mySaga)

export default store;