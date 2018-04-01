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

const getCounter = R.path(['simpleCounter', 'counter']);
const getCachedValue = R.path(['simpleCounter', 'cachedValue']);

const mapStateToProps = createStructuredSelector({
  counter: getCounter,
  cachedValue: getCachedValue
});

const mapDispatchToProps = {
  increment: () => increment('simple-counter', 1),
  decrement: () => decrement('simple-counter', 1),
  storeValueInCache: valueToStore => storeValueInCache('simple-counter', valueToStore),
  restoreCachedValue: () => restoreCachedValue('simple-counter')
};

export const SimpleCounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);