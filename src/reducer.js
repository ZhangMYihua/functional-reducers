import { combineReducers } from 'redux';

import simpleCounterReducer from './components/simple-counter/simple-counter.reducer';
import evenCounterReducer from './components/even-counter/even-counter.reducer';
import randomCounterReducer from './components/random-counter/random-counter.reducer';

const rootReducer = combineReducers({
  simpleCounter: simpleCounterReducer,
  evenCounter: evenCounterReducer,
  randomCounter: randomCounterReducer
});

export default rootReducer;