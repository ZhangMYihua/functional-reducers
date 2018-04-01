import { compose, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createHashHistory';

import rootReducer from './reducer';

const logger = createLogger({
  collapsed: true,
});

export const history = createHistory();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(logger),
  )
);

export default store;

