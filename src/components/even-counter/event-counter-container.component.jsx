import { connect } from 'react-redux';
import {
  createSelector,
  createStructuredSelector
} from 'reselect';
import * as R from 'ramda';

import { Counter } from '../counter/counter.component';
import {
  increment,
  decrement,
  storeValueInCache,
  restoreCachedValue
} from '../counter/counter.action';

const getCounter = R.path(['evenCounter', 'counter']);
const getCachedValue = R.path(['evenCounter', 'cachedValue']);

const mapStateToProps = createStructuredSelector({
  counter: getCounter,
  cachedValue: getCachedValue
});

const mapDispatchToProps = {
  increment: () => increment('even-counter', 2),
  decrement: () => decrement('even-counter', 2),
  storeValueInCache: valueToStore => storeValueInCache('even-counter', valueToStore),
  restoreCachedValue: () => restoreCachedValue('even-counter')
};

export const EvenCounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);