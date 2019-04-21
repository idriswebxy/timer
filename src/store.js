import { createStore } from 'redux'
import { reducer } from './reducers';
// // import { applyMiddleware } from 'redux';
// import { createLogger } from 'redux-logger';

// const logger = createLogger();

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
