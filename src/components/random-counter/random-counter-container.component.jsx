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

const getCounter = R.path(['randomCounter', 'counter']);
const getCachedValue = R.path(['randomCounter', 'cachedValue']);

const mapStateToProps = createStructuredSelector({
  counter: getCounter,
  cachedValue: getCachedValue
});

const mapDispatchToProps = {
  increment: () => increment('random-counter', 5),
  decrement: () => decrement('random-counter', 3),
  storeValueInCache: valueToStore => storeValueInCache('random-counter', valueToStore),
  restoreCachedValue: () => restoreCachedValue('random-counter')
};

export const RandomCounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);