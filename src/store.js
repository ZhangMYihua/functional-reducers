import { compose, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createHashHistory';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from './reducer';

const logger = createLogger({
  collapsed: true,
});

export const history = createHistory();

const appRouterMiddleware = routerMiddleware(history);

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(logger),
  )
);

export default store;

